<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with(['category', 'author', 'tags'])
            ->published()
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt ?: $this->generateExcerpt($blog->content),
                    'featured_image' => $blog->featured_image,
                    'category' => $blog->category ? [
                        'id' => $blog->category->id,
                        'name' => $blog->category->name,
                        'slug' => $blog->category->slug,
                    ] : null,
                    'author' => [
                        'id' => $blog->author->id,
                        'name' => $blog->author->name,
                        'profile_image' => $blog->author->profile_image,
                        'profile_image_url' => $blog->author->profile_image_url,
                        'avatar' => $blog->author->profile_image_url, // For compatibility with existing template
                    ],
                    'tags' => $blog->tags->map(function ($tag) {
                        return [
                            'id' => $tag->id,
                            'name' => $tag->name,
                            'slug' => $tag->slug,
                        ];
                    }),
                    'published_at' => $blog->published_at->format('M d, Y'),
                    'published_at_human' => $blog->published_at->diffForHumans(),
                    'read_time' => $this->calculateReadTime($blog->content),
                ];
            });

        return Inertia::render('Blog/Index', [
            'blogs' => $blogs,
            'totalBlogs' => $blogs->count(),
        ]);
    }

    public function show($slug)
    {
        $blog = Blog::with(['category', 'author', 'tags'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        // Get previous blog (older)
        $previousBlog = Blog::where('status', 'published')
            ->where('published_at', '<', $blog->published_at)
            ->orderBy('published_at', 'desc')
            ->first();

        // Get next blog (newer)
        $nextBlog = Blog::where('status', 'published')
            ->where('published_at', '>', $blog->published_at)
            ->orderBy('published_at', 'asc')
            ->first();

        // Get related blogs (same category, excluding current blog)
        $relatedBlogs = Blog::with(['category', 'author'])
            ->where('category_id', $blog->category_id)
            ->where('id', '!=', $blog->id)
            ->where('status', 'published')
            ->limit(3)
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt ?: $this->generateExcerpt($blog->content),
                    'featured_image' => $blog->featured_image,
                    'published_at' => $blog->published_at->format('M d, Y'),
                ];
            });

        return Inertia::render('Blog/Show', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'content' => $blog->content,
                'excerpt' => $blog->excerpt ?: $this->generateExcerpt($blog->content),
                'featured_image' => $blog->featured_image,
                'meta_title' => $blog->meta_title ?: $blog->title,
                'meta_description' => $blog->meta_description ?: $this->generateExcerpt($blog->content),
                'meta_keywords' => $blog->meta_keywords,
                'category' => $blog->category ? [
                    'id' => $blog->category->id,
                    'name' => $blog->category->name,
                    'slug' => $blog->category->slug,
                ] : null,
                'author' => [
                    'id' => $blog->author->id,
                    'name' => $blog->author->name,
                    'profile_image' => $blog->author->profile_image,
                    'profile_image_url' => $blog->author->profile_image_url,
                    'avatar' => $blog->author->profile_image_url, // For compatibility with existing template
                ],
                'tags' => $blog->tags->map(function ($tag) {
                    return [
                        'id' => $tag->id,
                        'name' => $tag->name,
                        'slug' => $tag->slug,
                    ];
                }),
                'published_at' => $blog->published_at->format('M d, Y'),
                'published_at_human' => $blog->published_at->diffForHumans(),
                'read_time' => $this->calculateReadTime($blog->content),
            ],
            'previousBlog' => $previousBlog ? [
                'title' => $previousBlog->title,
                'slug' => $previousBlog->slug,
            ] : null,
            'nextBlog' => $nextBlog ? [
                'title' => $nextBlog->title,
                'slug' => $nextBlog->slug,
            ] : null,
            'relatedBlogs' => $relatedBlogs,
        ]);
    }

    private function generateExcerpt($content, $length = 150)
    {
        $text = strip_tags($content);
        return strlen($text) > $length ? substr($text, 0, $length) . '...' : $text;
    }

    private function calculateReadTime($content)
    {
        $wordCount = str_word_count(strip_tags($content));
        $readTimeMinutes = ceil($wordCount / 200); // Average reading speed: 200 words per minute
        return $readTimeMinutes . ' min read';
    }
}
