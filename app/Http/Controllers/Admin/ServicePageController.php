<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServicePage;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ServicePageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = ServicePage::query();

        // Search filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('subtitle', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('slug', 'like', "%{$search}%");
            });
        }

        // Status filter
        if ($request->filled('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Featured filter
        if ($request->filled('featured') && $request->featured !== 'all') {
            $query->where('is_featured', $request->featured === 'featured' ? true : false);
        }

        // Date range filter
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'sort_order');
        $sortOrder = $request->get('sort_order', 'asc');

        if ($sortBy === 'sort_order') {
            $query->ordered();
        } else {
            $query->orderBy($sortBy, $sortOrder);
        }

        // Pagination
        $perPage = $request->get('per_page', 10);
        $servicePages = $query->select([
                'id', 'title', 'slug', 'status', 'is_featured',
                'sort_order', 'created_at', 'updated_at'
            ])
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/ServicePages/Index', [
            'servicePages' => $servicePages,
            'filters' => $request->only(['search', 'status', 'featured', 'date_from', 'date_to', 'sort_by', 'sort_order', 'per_page'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ServicePages/Create', [
            'defaultSections' => ServicePage::getDefaultSections(),
            'defaultServicesData' => ServicePage::getDefaultServicesData(),
            'defaultFaqsData' => ServicePage::getDefaultFaqsData(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:service_pages,slug',
            'subtitle' => 'required|string',
            'description' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string|max:500',
            'hero_background_image' => 'nullable|string|max:500',
            'hero_background_color' => 'nullable|string|max:7',
            'hero_overlay_gradient' => 'nullable|string',
            'cta_text' => 'nullable|string|max:100',
            'cta_link' => 'nullable|string|max:500',
            'sections' => 'nullable|array',
            'services_data' => 'nullable|array',
            'faqs_data' => 'nullable|array',
            'custom_content' => 'nullable|array',
            'status' => 'required|in:draft,published',
            'is_featured' => 'boolean',
            'sort_order' => 'nullable|integer',
            // Section-specific content fields
            'image_content_title' => 'nullable|string|max:255',
            'image_content_subtitle' => 'nullable|string|max:255',
            'image_content_descriptions' => 'nullable|array',
            'image_content_image' => 'nullable|string|max:500',
            'image_content_cta_text' => 'nullable|string|max:100',
            'services_grid_title' => 'nullable|string|max:255',
            'services_grid_description' => 'nullable|string',
            'platforms_title' => 'nullable|string|max:255',
            'platforms_description' => 'nullable|string',
            'why_choose_title' => 'nullable|string|max:255',
            'why_choose_description' => 'nullable|string',
            'why_choose_data' => 'nullable|array',
            'service_cta_title' => 'nullable|string|max:255',
            'service_cta_description' => 'nullable|string',
            'service_cta_text' => 'nullable|string|max:100',
            'service_cta_image' => 'nullable|string|max:500',
            'our_approach_title' => 'nullable|string|max:255',
            'our_approach_description' => 'nullable|string',
            'our_approach_content' => 'nullable|array',
            'key_benefits_title' => 'nullable|string|max:255',
            'key_benefits_description' => 'nullable|string',
            'key_benefits_content' => 'nullable|array'
        ]);

        // Set default values if not provided
        $validated['sections'] = $validated['sections'] ?? ServicePage::getDefaultSections();
        $validated['services_data'] = $validated['services_data'] ?? ServicePage::getDefaultServicesData();
        $validated['faqs_data'] = $validated['faqs_data'] ?? ServicePage::getDefaultFaqsData();
        $validated['hero_background_color'] = $validated['hero_background_color'] ?? '#121212';
        $validated['cta_text'] = $validated['cta_text'] ?? 'Talk To Our Experts';

        // Set sort order if not provided
        if (!isset($validated['sort_order'])) {
            $validated['sort_order'] = ServicePage::max('sort_order') + 1;
        }

        $servicePage = ServicePage::create($validated);

        return redirect()->route('admin.service-pages.edit', $servicePage)
            ->with('success', 'Service page created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ServicePage $servicePage)
    {
        return Inertia::render('Admin/ServicePages/Show', [
            'servicePage' => $servicePage
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ServicePage $servicePage)
    {
        return Inertia::render('Admin/ServicePages/Edit', [
            'servicePage' => $servicePage,
            'defaultSections' => ServicePage::getDefaultSections(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ServicePage $servicePage)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:service_pages,slug,' . $servicePage->id,
            'subtitle' => 'required|string',
            'description' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|string|max:500',
            'hero_background_image' => 'nullable|string|max:500',
            'hero_background_color' => 'nullable|string|max:7',
            'hero_overlay_gradient' => 'nullable|string',
            'cta_text' => 'nullable|string|max:100',
            'cta_link' => 'nullable|string|max:500',
            'sections' => 'nullable|array',
            'services_data' => 'nullable|array',
            'faqs_data' => 'nullable|array',
            'custom_content' => 'nullable|array',
            'status' => 'required|in:draft,published',
            'is_featured' => 'boolean',
            'sort_order' => 'nullable|integer',
            // Section-specific content fields
            'image_content_title' => 'nullable|string|max:255',
            'image_content_subtitle' => 'nullable|string|max:255',
            'image_content_descriptions' => 'nullable|array',
            'image_content_image' => 'nullable|string|max:500',
            'image_content_cta_text' => 'nullable|string|max:100',
            'services_grid_title' => 'nullable|string|max:255',
            'services_grid_description' => 'nullable|string',
            'platforms_title' => 'nullable|string|max:255',
            'platforms_description' => 'nullable|string',
            'why_choose_title' => 'nullable|string|max:255',
            'why_choose_description' => 'nullable|string',
            'why_choose_data' => 'nullable|array',
            'service_cta_title' => 'nullable|string|max:255',
            'service_cta_description' => 'nullable|string',
            'service_cta_text' => 'nullable|string|max:100',
            'service_cta_image' => 'nullable|string|max:500',
            'our_approach_title' => 'nullable|string|max:255',
            'our_approach_description' => 'nullable|string',
            'our_approach_content' => 'nullable|array',
            'key_benefits_title' => 'nullable|string|max:255',
            'key_benefits_description' => 'nullable|string',
            'key_benefits_content' => 'nullable|array'
        ]);

        $servicePage->update($validated);

        return redirect()->back()
            ->with('success', 'Service page updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServicePage $servicePage)
    {
        $servicePage->delete();

        return redirect()->route('admin.service-pages.index')
            ->with('success', 'Service page deleted successfully!');
    }

    /**
     * Update the status of a service page
     */
    public function updateStatus(Request $request, ServicePage $servicePage)
    {
        $request->validate([
            'status' => 'required|in:draft,published'
        ]);

        $servicePage->update(['status' => $request->status]);

        return redirect()->back()
            ->with('success', 'Service page status updated successfully!');
    }

    /**
     * Toggle featured status
     */
    public function toggleFeatured(ServicePage $servicePage)
    {
        $servicePage->toggleFeatured();

        return redirect()->back()
            ->with('success', 'Featured status updated successfully!');
    }

    /**
     * Bulk update sort order
     */
    public function updateSortOrder(Request $request)
    {
        $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|exists:service_pages,id',
            'items.*.sort_order' => 'required|integer'
        ]);

        foreach ($request->items as $item) {
            ServicePage::where('id', $item['id'])
                ->update(['sort_order' => $item['sort_order']]);
        }

        return redirect()->back()
            ->with('success', 'Sort order updated successfully!');
    }

    /**
     * Upload image for service page
     */
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $path = $request->file('image')->store('service-pages', 'public');
        $url = Storage::url($path);

        return response()->json([
            'success' => true,
            'url' => $url,
            'path' => $path
        ]);
    }

    /**
     * Preview service page
     */
    public function preview(ServicePage $servicePage)
    {
        // Fetch latest published blogs for insights section
        $blogs = Blog::with(['category', 'author'])
            ->published()
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'featured_image' => $blog->featured_image,
                    'category' => $blog->category ? [
                        'id' => $blog->category->id,
                        'name' => $blog->category->name,
                        'slug' => $blog->category->slug,
                    ] : null,
                ];
            });

        return Inertia::render('Services/DynamicServicePage', [
            'servicePage' => $servicePage,
            'isPreview' => true,
            'blogs' => $blogs
        ]);
    }
}
