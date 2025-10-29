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
    public function index()
    {
        $blogs = Blog::with(['category', 'author', 'tags'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'status' => $blog->status,
                    'category' => $blog->category ? $blog->category->name : 'Uncategorized',
                    'author' => $blog->author->name,
                    'tags' => $blog->tags->pluck('name')->join(', '),
                    'published_at' => $blog->published_at ? $blog->published_at->format('M d, Y') : null,
                    'created_at' => $blog->created_at->format('M d, Y'),
                    'created_at_human' => $blog->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs
        ]);
    }

    public function create()
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Blogs/Create', [
            'categories' => $categories,
            'tags' => $tags,
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

        $validated['author_id'] = auth()->id();

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
                'tags' => $blog->tags->pluck('id')->toArray(),
                'published_at' => $blog->published_at ? $blog->published_at->format('Y-m-d\TH:i') : null,
            ],
            'categories' => $categories,
            'tags' => $tags,
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

    public function destroy(Blog $blog)
    {
        $blog->tags()->detach();
        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog deleted successfully.');
    }
}
