<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeeklyDatabricks;
use Inertia\Inertia;

class WeeklyDatabricksController extends Controller
{
    public function index()
    {
        $weeklyArticles = WeeklyDatabricks::with(['category', 'author', 'tags'])
            ->published()
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->title,
                    'slug' => $article->slug,
                    'excerpt' => $article->excerpt ?: $this->generateExcerpt($article->content),
                    'featured_image' => $article->featured_image,
                    'category' => $article->category ? [
                        'name' => $article->category->name,
                        'slug' => $article->category->slug,
                    ] : null,
                    'tags' => $article->tags->map(function($tag) {
                        return [
                            'name' => $tag->name,
                            'slug' => $tag->slug,
                        ];
                    }),
                    'published_at' => $article->published_at->format('Y-m-d'),
                    'published_at_formatted' => $article->published_at->format('M d, Y'),
                    'published_at_human' => $article->published_at->diffForHumans(),
                    'read_time' => $this->calculateReadTime($article->content),
                ];
            });

        return Inertia::render('WeeklyDatabricks/Index', [
            'weeklyArticles' => $weeklyArticles,
            'totalArticles' => $weeklyArticles->count(),
            'hasMoreArticles' => false, // Can implement pagination later
        ]);
    }

    public function preview($slug)
    {
        $article = WeeklyDatabricks::where('slug', $slug)
            ->where('status', 'draft')
            ->firstOrFail();

        return Inertia::render('WeeklyDatabricks/Show', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'content' => $article->content,
                'excerpt' => $article->excerpt ?: $this->generateExcerpt($article->content),
                'featured_image' => $article->featured_image,
                'meta_title' => $article->meta_title ?: $article->title,
                'meta_description' => $article->meta_description ?: $this->generateExcerpt($article->content),
                'meta_keywords' => $article->meta_keywords,
                'published_at' => $article->created_at->format('Y-m-d'),
                'published_at_formatted' => $article->created_at->format('M d, Y'),
                'published_at_human' => $article->created_at->diffForHumans(),
                'read_time' => $this->calculateReadTime($article->content),
            ],
            'previousArticle' => null,
            'nextArticle' => null,
            'relatedArticles' => [],
            'isPreview' => true,
        ]);
    }

    public function show($slug)
    {
        $article = WeeklyDatabricks::with(['category', 'author', 'tags'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        // Get previous article (older)
        $previousArticle = WeeklyDatabricks::where('status', 'published')
            ->where('published_at', '<', $article->published_at)
            ->orderBy('published_at', 'desc')
            ->first();

        // Get next article (newer)
        $nextArticle = WeeklyDatabricks::where('status', 'published')
            ->where('published_at', '>', $article->published_at)
            ->orderBy('published_at', 'asc')
            ->first();

        // Get related articles (recent published articles excluding current)
        $relatedArticles = WeeklyDatabricks::with(['category', 'author', 'tags'])
            ->where('id', '!=', $article->id)
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get()
            ->map(function ($relatedArticle) {
                return [
                    'id' => $relatedArticle->id,
                    'title' => $relatedArticle->title,
                    'slug' => $relatedArticle->slug,
                    'excerpt' => $relatedArticle->excerpt ?: $this->generateExcerpt($relatedArticle->content),
                    'featured_image' => $relatedArticle->featured_image,
                    'category' => $relatedArticle->category ? [
                        'name' => $relatedArticle->category->name,
                        'slug' => $relatedArticle->category->slug,
                    ] : null,
                    'published_at' => $relatedArticle->published_at->format('Y-m-d'),
                    'published_at_formatted' => $relatedArticle->published_at->format('M d, Y'),
                ];
            });

        return Inertia::render('WeeklyDatabricks/Show', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'content' => $article->content,
                'excerpt' => $article->excerpt ?: $this->generateExcerpt($article->content),
                'featured_image' => $article->featured_image,
                'category' => $article->category ? [
                    'name' => $article->category->name,
                    'slug' => $article->category->slug,
                ] : null,
                'author' => [
                    'name' => $article->author->name,
                ],
                'tags' => $article->tags->map(function($tag) {
                    return [
                        'name' => $tag->name,
                        'slug' => $tag->slug,
                    ];
                }),
                'meta_title' => $article->meta_title ?: $article->title,
                'meta_description' => $article->meta_description ?: $this->generateExcerpt($article->content),
                'meta_keywords' => $article->meta_keywords,
                'published_at' => $article->published_at->format('Y-m-d'),
                'published_at_formatted' => $article->published_at->format('M d, Y'),
                'published_at_human' => $article->published_at->diffForHumans(),
                'read_time' => $this->calculateReadTime($article->content),
            ],
            'previousArticle' => $previousArticle ? [
                'title' => $previousArticle->title,
                'slug' => $previousArticle->slug,
            ] : null,
            'nextArticle' => $nextArticle ? [
                'title' => $nextArticle->title,
                'slug' => $nextArticle->slug,
            ] : null,
            'relatedArticles' => $relatedArticles,
            'isPreview' => false,
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