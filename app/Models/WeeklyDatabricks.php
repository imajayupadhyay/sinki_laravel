<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;
use Carbon\Carbon;

class WeeklyDatabricks extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'excerpt',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'featured_image',
        'status',
        'weekly_databricks_category_id',
        'author_id',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    /**
     * Boot the model to automatically generate slug
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Auto-generate slug if not provided
            if (empty($model->slug)) {
                $model->slug = Str::slug($model->title);
            }
        });

        static::updating(function ($model) {
            // Update slug if title changed
            if ($model->isDirty('title')) {
                $model->slug = Str::slug($model->title);
            }
        });
    }

    /**
     * Scope to get published articles
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                    ->whereNotNull('published_at')
                    ->where('published_at', '<=', now());
    }

    /**
     * Scope to get draft articles
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }


    /**
     * Get route key name for model binding
     */
    public function getRouteKeyName()
    {
        // Use 'id' for admin routes, 'slug' for frontend routes
        if (request()->is('admin/*')) {
            return 'id';
        }

        return 'slug';
    }

    /**
     * Generate a unique slug
     */
    public static function generateUniqueSlug($title, $id = null)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $counter = 1;

        while (static::where('slug', $slug)->when($id, function ($query, $id) {
            return $query->where('id', '!=', $id);
        })->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }

    /**
     * Auto-publish when status is set to published
     */
    public function setStatusAttribute($value)
    {
        $this->attributes['status'] = $value;

        if ($value === 'published' && is_null($this->published_at)) {
            $this->attributes['published_at'] = now();
        }
    }

    /**
     * Relationships
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(WeeklyDatabricksCategory::class, 'weekly_databricks_category_id');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(WeeklyDatabricksTag::class, 'wd_tag_pivot');
    }
}
