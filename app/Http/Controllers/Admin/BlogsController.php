<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class BlogsController extends Controller
{
    public function index(Request $request)
    {
        $query = Blog::with(['category', 'author', 'tags']);

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
            $query->where('category_id', $request->category);
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
        $blogs = $query->paginate($perPage)->withQueryString();

        // Transform the data
        $blogs->getCollection()->transform(function ($blog) {
            return [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'status' => $blog->status,
                'category' => $blog->category ? $blog->category->name : 'Uncategorized',
                'category_id' => $blog->category_id,
                'author' => $blog->author->name,
                'author_id' => $blog->author_id,
                'tags' => $blog->tags->pluck('name')->join(', '),
                'published_at' => $blog->published_at ? $blog->published_at->format('M d, Y') : null,
                'created_at' => $blog->created_at->format('M d, Y'),
                'created_at_human' => $blog->created_at->diffForHumans(),
                'created_at_raw' => $blog->created_at->format('Y-m-d'),
            ];
        });

        // Get filter options
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $authors = \App\Models\User::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'authors' => $authors,
            'filters' => $request->only(['search', 'status', 'category', 'author', 'date_from', 'date_to', 'sort_by', 'sort_order', 'per_page'])
        ]);
    }

    public function create()
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $tags = Tag::orderBy('name')->get(['id', 'name']);
        $users = \App\Models\User::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Blogs/Create', [
            'categories' => $categories,
            'tags' => $tags,
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string',
            'featured_image' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'category_id' => 'nullable|exists:categories,id',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        } else {
            $validated['slug'] = Str::slug($validated['slug']);
        }

        $slugCount = Blog::where('slug', 'LIKE', $validated['slug'] . '%')->count();
        if ($slugCount > 0) {
            $validated['slug'] = $validated['slug'] . '-' . ($slugCount + 1);
        }

        // Author ID is now provided from the form instead of defaulting to auth user

        if ($validated['status'] === 'published' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        $tags = $validated['tags'] ?? [];
        unset($validated['tags']);

        $blog = Blog::create($validated);
        $blog->tags()->sync($tags);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog created successfully.');
    }

    public function edit(Blog $blog)
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $tags = Tag::orderBy('name')->get(['id', 'name']);
        $users = \App\Models\User::orderBy('name')->get(['id', 'name']);

        $blog->load(['category', 'tags']);

        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'content' => $blog->content,
                'excerpt' => $blog->excerpt,
                'meta_title' => $blog->meta_title,
                'meta_description' => $blog->meta_description,
                'meta_keywords' => $blog->meta_keywords,
                'featured_image' => $blog->featured_image,
                'status' => $blog->status,
                'category_id' => $blog->category_id,
                'author_id' => $blog->author_id,
                'tags' => $blog->tags->pluck('id')->toArray(),
                'published_at' => $blog->published_at ? $blog->published_at->format('Y-m-d\TH:i') : null,
            ],
            'categories' => $categories,
            'tags' => $tags,
            'users' => $users,
        ]);
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('blogs')->ignore($blog->id),
            ],
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string',
            'featured_image' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'category_id' => 'nullable|exists:categories,id',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        } else {
            $validated['slug'] = Str::slug($validated['slug']);
        }

        if ($validated['status'] === 'published' && $blog->status === 'draft' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        $tags = $validated['tags'] ?? [];
        unset($validated['tags']);

        $blog->update($validated);
        $blog->tags()->sync($tags);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog updated successfully.');
    }

    public function duplicate(Blog $blog)
    {
        $blog->load('tags');

        $duplicatedBlog = $blog->replicate();

        $duplicatedBlog->title = $blog->title . ' (Copy)';
        $duplicatedBlog->slug = Str::slug($duplicatedBlog->title);
        $duplicatedBlog->status = 'draft';
        $duplicatedBlog->published_at = null;
        $duplicatedBlog->author_id = auth()->id();

        $slugCount = Blog::where('slug', 'LIKE', $duplicatedBlog->slug . '%')->count();
        if ($slugCount > 0) {
            $duplicatedBlog->slug = $duplicatedBlog->slug . '-' . ($slugCount + 1);
        }

        $duplicatedBlog->save();

        $duplicatedBlog->tags()->sync($blog->tags->pluck('id')->toArray());

        return redirect()->route('admin.blogs.edit', $duplicatedBlog->id)
            ->with('success', 'Blog duplicated successfully. You can now edit the duplicated post.');
    }

    public function preview(Blog $blog)
    {
        if ($blog->status === 'published') {
            return redirect()->route('blog.show', $blog->slug);
        }

        return redirect()->route('blog.preview', $blog->slug);
    }

    public function destroy(Blog $blog)
    {
        $blog->tags()->detach();
        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog deleted successfully.');
    }
}
