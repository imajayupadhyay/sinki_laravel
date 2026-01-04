<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WeeklyDatabricksCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class WeeklyDatabricksCategoriesController extends Controller
{
    public function index()
    {
        $categories = WeeklyDatabricksCategory::withCount('weeklyDatabricks')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($category) {
                return [
                    'id' => $category->id,
                    'name' => $category->name,
                    'slug' => $category->slug,
                    'description' => $category->description,
                    'weekly_databricks_count' => $category->weekly_databricks_count,
                    'created_at' => $category->created_at->format('M d, Y'),
                    'created_at_human' => $category->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('Admin/WeeklyDatabricks/Categories/Index', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:weekly_databricks_categories',
            'description' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $slugCount = WeeklyDatabricksCategory::where('slug', 'LIKE', $validated['slug'] . '%')->count();
        if ($slugCount > 0) {
            $validated['slug'] = $validated['slug'] . '-' . ($slugCount + 1);
        }

        WeeklyDatabricksCategory::create($validated);

        return redirect()->route('admin.weekly-databricks-categories.index')
            ->with('success', 'Category created successfully.');
    }

    public function update(Request $request, WeeklyDatabricksCategory $weeklyDatabricksCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('weekly_databricks_categories')->ignore($weeklyDatabricksCategory->id)
            ],
            'description' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $weeklyDatabricksCategory->update($validated);

        return redirect()->route('admin.weekly-databricks-categories.index')
            ->with('success', 'Category updated successfully.');
    }

    public function destroy(WeeklyDatabricksCategory $weeklyDatabricksCategory)
    {
        // Check if category has any weekly databricks articles
        if ($weeklyDatabricksCategory->weeklyDatabricks()->count() > 0) {
            return redirect()->route('admin.weekly-databricks-categories.index')
                ->with('error', 'Cannot delete category that has weekly databricks articles.');
        }

        $weeklyDatabricksCategory->delete();

        return redirect()->route('admin.weekly-databricks-categories.index')
            ->with('success', 'Category deleted successfully.');
    }
}
