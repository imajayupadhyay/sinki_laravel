<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class ServicePage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'hero_background_image',
        'hero_background_color',
        'hero_overlay_gradient',
        'cta_text',
        'cta_link',
        'sections',
        'services_data',
        'faqs_data',
        'custom_content',
        'status',
        'is_featured',
        'sort_order',
        // Section-specific content
        'image_content_title',
        'image_content_subtitle',
        'image_content_descriptions',
        'image_content_image',
        'image_content_cta_text',
        'services_grid_title',
        'services_grid_description',
        'platforms_title',
        'platforms_description',
        'why_choose_title',
        'why_choose_description',
        'why_choose_data',
        'service_cta_title',
        'service_cta_description',
        'service_cta_text',
        'service_cta_image',
        'our_approach_title',
        'our_approach_description',
        'our_approach_content',
        'key_benefits_title',
        'key_benefits_description',
        'key_benefits_content'
    ];

    protected $casts = [
        'sections' => 'array',
        'services_data' => 'array',
        'faqs_data' => 'array',
        'custom_content' => 'array',
        'is_featured' => 'boolean',
        'image_content_descriptions' => 'array',
        'our_approach_content' => 'array',
        'key_benefits_content' => 'array',
        'why_choose_data' => 'array'
    ];

    // Automatically generate slug from title
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($servicePage) {
            if (empty($servicePage->slug)) {
                $servicePage->slug = Str::slug($servicePage->title);

                // Ensure unique slug
                $originalSlug = $servicePage->slug;
                $counter = 1;
                while (static::where('slug', $servicePage->slug)->exists()) {
                    $servicePage->slug = $originalSlug . '-' . $counter;
                    $counter++;
                }
            }
        });

        static::updating(function ($servicePage) {
            if ($servicePage->isDirty('title') && empty($servicePage->getOriginal('slug'))) {
                $servicePage->slug = Str::slug($servicePage->title);

                // Ensure unique slug
                $originalSlug = $servicePage->slug;
                $counter = 1;
                while (static::where('slug', $servicePage->slug)->where('id', '!=', $servicePage->id)->exists()) {
                    $servicePage->slug = $originalSlug . '-' . $counter;
                    $counter++;
                }
            }
        });
    }

    // Scopes
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc')->orderBy('created_at', 'desc');
    }

    // Accessors
    public function getUrlAttribute()
    {
        return "/services/{$this->slug}";
    }

    public function getIsPublishedAttribute()
    {
        return $this->status === 'published';
    }

    // Helper methods
    public function publish()
    {
        $this->update(['status' => 'published']);
    }

    public function draft()
    {
        $this->update(['status' => 'draft']);
    }

    public function toggleFeatured()
    {
        $this->update(['is_featured' => !$this->is_featured]);
    }

    // Get default sections configuration
    public static function getDefaultSections()
    {
        return [
            'service_hero' => ['enabled' => true, 'order' => 1],
            'partner_badge' => ['enabled' => true, 'order' => 2],
            'image_content' => ['enabled' => true, 'order' => 3],
            'services_grid' => ['enabled' => true, 'order' => 4],
            'our_approach' => ['enabled' => true, 'order' => 5],
            'key_benefits' => ['enabled' => true, 'order' => 6],
            'platforms' => ['enabled' => true, 'order' => 7],
            'why_choose_us' => ['enabled' => true, 'order' => 8],
            'service_cta' => ['enabled' => true, 'order' => 9],
            'insights_resources' => ['enabled' => true, 'order' => 10],
            'faq' => ['enabled' => true, 'order' => 11]
        ];
    }

    // Get default services data structure
    public static function getDefaultServicesData()
    {
        return [
            [
                'title' => 'Service Title',
                'description' => 'Service description goes here.',
                'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
            ]
        ];
    }

    // Get default FAQs data structure
    public static function getDefaultFaqsData()
    {
        return [
            [
                'question' => 'Sample question?',
                'answer' => 'Sample answer goes here.'
            ]
        ];
    }
}
