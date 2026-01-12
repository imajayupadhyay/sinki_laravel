<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WeeklyDatabricks;
use App\Models\WeeklyDatabricksCategory;
use App\Models\WeeklyDatabricksTag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class WeeklyDatabricksController extends Controller
{
    public function index(Request $request)
    {
        $query = WeeklyDatabricks::with(['category', 'author', 'tags']);

        // Search filter
        if ($request->filled('search')) {
            $search = trim($request->search);
            if ($search !== '') {
                $query->where(function($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('content', 'like', "%{$search}%")
                      ->orWhere('excerpt', 'like', "%{$search}%")
                      ->orWhere('slug', 'like', "%{$search}%");
                });
            }
        }

        // Status filter
        if ($request->filled('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Category filter
        if ($request->filled('category') && $request->category !== 'all') {
            $query->where('weekly_databricks_category_id', $request->category);
        }

        // Author filter
        if ($request->filled('author') && $request->author !== 'all') {
            $query->where('author_id', $request->author);
        }


        // Date range filter
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 10);
        $weeklyDatabricks = $query->paginate($perPage)->withQueryString();

        // Transform the data
        $weeklyDatabricks->getCollection()->transform(function ($article) {
            return [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'status' => $article->status,
                'category' => $article->category ? $article->category->name : 'Uncategorized',
                'category_id' => $article->category_id,
                'author' => $article->author->name,
                'author_id' => $article->author_id,
                'tags' => $article->tags->pluck('name')->join(', '),
                'published_at' => $article->published_at ? $article->published_at->format('M d, Y') : null,
                'created_at' => $article->created_at->format('M d, Y'),
                'created_at_human' => $article->created_at->diffForHumans(),
                'created_at_raw' => $article->created_at->format('Y-m-d'),
            ];
        });

        // Get filter options
        $categories = WeeklyDatabricksCategory::orderBy('name')->get(['id', 'name']);
        $authors = \App\Models\User::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/WeeklyDatabricks/Index', [
            'weeklyDatabricks' => $weeklyDatabricks,
            'categories' => $categories,
            'authors' => $authors,
            'filters' => $request->only(['search', 'status', 'category', 'author', 'date_from', 'date_to', 'sort_by', 'sort_order', 'per_page'])
        ]);
    }

    public function create()
    {
        $categories = WeeklyDatabricksCategory::orderBy('name')->get(['id', 'name']);
        $tags = WeeklyDatabricksTag::orderBy('name')->get(['id', 'name']);
        $users = \App\Models\User::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/WeeklyDatabricks/Create', [
            'categories' => $categories,
            'tags' => $tags,
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:weekly_databricks',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string',
            'featured_image' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'weekly_databricks_category_id' => 'nullable|exists:weekly_databricks_categories,id',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:weekly_databricks_tags,id',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        } else {
            $validated['slug'] = Str::slug($validated['slug']);
        }

        $slugCount = WeeklyDatabricks::where('slug', 'LIKE', $validated['slug'] . '%')->count();
        if ($slugCount > 0) {
            $validated['slug'] = $validated['slug'] . '-' . ($slugCount + 1);
        }

        if ($validated['status'] === 'published' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }


        $tags = $validated['tags'] ?? [];
        unset($validated['tags']);

        $article = WeeklyDatabricks::create($validated);
        $article->tags()->sync($tags);

        return redirect()->route('admin.weekly-databricks.index')
            ->with('success', 'Weekly Databricks article created successfully.');
    }

    public function edit($id)
    {
        $weeklyDatabricks = WeeklyDatabricks::findOrFail($id);

        $categories = WeeklyDatabricksCategory::orderBy('name')->get(['id', 'name']);
        $tags = WeeklyDatabricksTag::orderBy('name')->get(['id', 'name']);
        $users = \App\Models\User::orderBy('name')->get(['id', 'name']);

        $weeklyDatabricks->load(['category', 'tags']);

        return Inertia::render('Admin/WeeklyDatabricks/Edit', [
            'weeklyDatabricks' => [
                'id' => $weeklyDatabricks->id,
                'title' => $weeklyDatabricks->title,
                'slug' => $weeklyDatabricks->slug,
                'content' => $weeklyDatabricks->content,
                'excerpt' => $weeklyDatabricks->excerpt,
                'meta_title' => $weeklyDatabricks->meta_title,
                'meta_description' => $weeklyDatabricks->meta_description,
                'meta_keywords' => $weeklyDatabricks->meta_keywords,
                'featured_image' => $weeklyDatabricks->featured_image,
                'status' => $weeklyDatabricks->status,
                'weekly_databricks_category_id' => $weeklyDatabricks->weekly_databricks_category_id,
                'author_id' => $weeklyDatabricks->author_id,
                'tags' => $weeklyDatabricks->tags->pluck('id')->toArray(),
                'published_at' => $weeklyDatabricks->published_at ? $weeklyDatabricks->published_at->format('Y-m-d\TH:i') : null,
            ],
            'categories' => $categories,
            'tags' => $tags,
            'users' => $users,
        ]);
    }

    public function update(Request $request, $id)
    {
        $weeklyDatabricks = WeeklyDatabricks::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('weekly_databricks')->ignore($weeklyDatabricks->id),
            ],
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string',
            'featured_image' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'weekly_databricks_category_id' => 'nullable|exists:weekly_databricks_categories,id',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:weekly_databricks_tags,id',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        } else {
            $validated['slug'] = Str::slug($validated['slug']);
        }

        if ($validated['status'] === 'published' && $weeklyDatabricks->status === 'draft' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }


        $tags = $validated['tags'] ?? [];
        unset($validated['tags']);

        $weeklyDatabricks->update($validated);
        $weeklyDatabricks->tags()->sync($tags);

        return redirect()->route('admin.weekly-databricks.index')
            ->with('success', 'Weekly Databricks article updated successfully.');
    }

    public function duplicate($id)
    {
        $weeklyDatabricks = WeeklyDatabricks::findOrFail($id);
        $weeklyDatabricks->load('tags');

        $duplicatedArticle = $weeklyDatabricks->replicate();

        $duplicatedArticle->title = $weeklyDatabricks->title . ' (Copy)';
        $duplicatedArticle->slug = Str::slug($duplicatedArticle->title);
        $duplicatedArticle->status = 'draft';
        $duplicatedArticle->published_at = null;
        $duplicatedArticle->author_id = auth()->id();


        $slugCount = WeeklyDatabricks::where('slug', 'LIKE', $duplicatedArticle->slug . '%')->count();
        if ($slugCount > 0) {
            $duplicatedArticle->slug = $duplicatedArticle->slug . '-' . ($slugCount + 1);
        }

        $duplicatedArticle->save();

        $duplicatedArticle->tags()->sync($weeklyDatabricks->tags->pluck('id')->toArray());

        return redirect()->route('admin.weekly-databricks.edit', $duplicatedArticle->id)
            ->with('success', 'Weekly Databricks article duplicated successfully. You can now edit the duplicated article.');
    }

    public function preview($id)
    {
        $weeklyDatabricks = WeeklyDatabricks::findOrFail($id);

        if ($weeklyDatabricks->status === 'published') {
            return redirect()->route('weekly-databricks.show', $weeklyDatabricks->slug);
        }

        return redirect()->route('weekly-databricks.preview', $weeklyDatabricks->slug);
    }

    public function destroy($id)
    {
        $weeklyDatabricks = WeeklyDatabricks::findOrFail($id);

        $weeklyDatabricks->tags()->detach();
        $weeklyDatabricks->delete();

        return redirect()->route('admin.weekly-databricks.index')
            ->with('success', 'Weekly Databricks article deleted successfully.');
    }
}