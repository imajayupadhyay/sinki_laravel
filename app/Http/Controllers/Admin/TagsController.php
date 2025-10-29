<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TagsController extends Controller
{
    public function index()
    {
        $tags = Tag::withCount('blogs')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'name' => $tag->name,
                    'slug' => $tag->slug,
                    'description' => $tag->description,
                    'blogs_count' => $tag->blogs_count,
                    'created_at' => $tag->created_at->format('M d, Y'),
                    'created_at_human' => $tag->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('Admin/Tags/Index', [
            'tags' => $tags
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:tags',
            'description' => 'nullable|string',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $slugCount = Tag::where('slug', 'LIKE', $validated['slug'] . '%')->count();
        if ($slugCount > 0) {
            $validated['slug'] = $validated['slug'] . '-' . ($slugCount + 1);
        }

        Tag::create($validated);

        return redirect()->route('admin.tags.index')
            ->with('success', 'Tag created successfully.');
    }

    public function update(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('tags')->ignore($tag->id),
            ],
            'description' => 'nullable|string',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $tag->update($validated);

        return redirect()->route('admin.tags.index')
            ->with('success', 'Tag updated successfully.');
    }

    public function destroy(Tag $tag)
    {
        $tag->blogs()->detach();
        $tag->delete();

        return redirect()->route('admin.tags.index')
            ->with('success', 'Tag deleted successfully.');
    }
}
