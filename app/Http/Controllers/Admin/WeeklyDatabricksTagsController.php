<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WeeklyDatabricksTag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class WeeklyDatabricksTagsController extends Controller
{
    public function index()
    {
        $tags = WeeklyDatabricksTag::withCount('weeklyDatabricks')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'name' => $tag->name,
                    'slug' => $tag->slug,
                    'description' => $tag->description,
                    'weekly_databricks_count' => $tag->weekly_databricks_count,
                    'created_at' => $tag->created_at->format('M d, Y'),
                    'created_at_human' => $tag->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('Admin/WeeklyDatabricks/Tags/Index', [
            'tags' => $tags
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:weekly_databricks_tags',
            'description' => 'nullable|string',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $slugCount = WeeklyDatabricksTag::where('slug', 'LIKE', $validated['slug'] . '%')->count();
        if ($slugCount > 0) {
            $validated['slug'] = $validated['slug'] . '-' . ($slugCount + 1);
        }

        WeeklyDatabricksTag::create($validated);

        return redirect()->route('admin.weekly-databricks-tags.index')
            ->with('success', 'Tag created successfully.');
    }

    public function update(Request $request, WeeklyDatabricksTag $weeklyDatabricksTag)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('weekly_databricks_tags')->ignore($weeklyDatabricksTag->id)
            ],
            'description' => 'nullable|string',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $weeklyDatabricksTag->update($validated);

        return redirect()->route('admin.weekly-databricks-tags.index')
            ->with('success', 'Tag updated successfully.');
    }

    public function destroy(WeeklyDatabricksTag $weeklyDatabricksTag)
    {
        // Check if tag has any weekly databricks articles
        if ($weeklyDatabricksTag->weeklyDatabricks()->count() > 0) {
            return redirect()->route('admin.weekly-databricks-tags.index')
                ->with('error', 'Cannot delete tag that has weekly databricks articles.');
        }

        $weeklyDatabricksTag->delete();

        return redirect()->route('admin.weekly-databricks-tags.index')
            ->with('success', 'Tag deleted successfully.');
    }
}
