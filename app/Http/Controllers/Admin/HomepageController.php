<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomepageHeroSection;
use App\Models\HomepagePartnerBadge;
use App\Models\WhatWeDoSection;
use App\Models\WhatWeDoItem;
use App\Models\OutcomesSection;
use App\Models\OutcomesItem;
use App\Models\OurApproachSection;
use App\Models\CoreServicesSection;
use App\Models\CoreService;
use App\Models\HomepageSeoSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class HomepageController extends Controller
{
    public function index()
    {
        $heroSection = HomepageHeroSection::active()->first();
        $partnerBadge = HomepagePartnerBadge::active()->first();
        $whatWeDoSection = WhatWeDoSection::with('items')->active()->first();
        $outcomesSection = OutcomesSection::with('items')->active()->first();
        $ourApproachSection = OurApproachSection::active()->first();
        $coreServicesSection = CoreServicesSection::with(['services' => function($query) {
            $query->orderBy('sort_order');
        }])->first();
        $seoSettings = HomepageSeoSetting::active()->first();

        return Inertia::render('Admin/Homepage/Index', [
            'heroSection' => $heroSection,
            'partnerBadge' => $partnerBadge,
            'whatWeDoSection' => $whatWeDoSection,
            'outcomesSection' => $outcomesSection,
            'ourApproachSection' => $ourApproachSection,
            'coreServicesSection' => $coreServicesSection,
            'seoSettings' => $seoSettings
        ]);
    }

    public function updateHero(Request $request)
    {
        $request->validate([
            'heading' => 'required|string|max:255',
            'paragraph' => 'required|string',
            'cta_text' => 'required|string|max:255',
            'cta_link' => 'required|string|max:255',
            'is_active' => 'boolean'
        ]);

        $heroSection = HomepageHeroSection::active()->first();

        if ($heroSection) {
            $heroSection->update($request->only([
                'heading', 'paragraph', 'cta_text', 'cta_link', 'is_active'
            ]));
        } else {
            $heroSection = HomepageHeroSection::create($request->only([
                'heading', 'paragraph', 'cta_text', 'cta_link', 'is_active'
            ]));
        }

        return back()->with('success', 'Hero section updated successfully!');
    }

    public function uploadHeroImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $heroSection = HomepageHeroSection::active()->first();

        if (!$heroSection) {
            return back()->withErrors(['error' => 'Hero section not found.']);
        }

        // Delete old image if exists
        if ($heroSection->background_image) {
            Storage::disk('public')->delete($heroSection->background_image);
        }

        // Store new image
        $imagePath = $request->file('image')->store('homepage/hero', 'public');

        $heroSection->update([
            'background_image' => $imagePath
        ]);

        return back()->with('success', 'Hero background image updated successfully!');
    }

    public function deleteHeroImage()
    {
        $heroSection = HomepageHeroSection::active()->first();

        if (!$heroSection || !$heroSection->background_image) {
            return back()->withErrors(['error' => 'No background image found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($heroSection->background_image);

        // Remove image path from database
        $heroSection->update([
            'background_image' => null
        ]);

        return back()->with('success', 'Hero background image deleted successfully!');
    }

    public function updatePartnerBadge(Request $request)
    {
        $request->validate([
            'text' => 'required|string|max:255',
            'logo_alt' => 'nullable|string|max:255',
            'is_active' => 'boolean'
        ]);

        $partnerBadge = HomepagePartnerBadge::active()->first();

        if ($partnerBadge) {
            $partnerBadge->update($request->only([
                'text', 'logo_alt', 'is_active'
            ]));
        } else {
            $partnerBadge = HomepagePartnerBadge::create($request->only([
                'text', 'logo_alt', 'is_active'
            ]));
        }

        return back()->with('success', 'Partner badge updated successfully!');
    }

    public function uploadPartnerLogo(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $partnerBadge = HomepagePartnerBadge::active()->first();

        if (!$partnerBadge) {
            return back()->withErrors(['error' => 'Partner badge not found.']);
        }

        // Delete old logo if exists
        if ($partnerBadge->logo_image) {
            Storage::disk('public')->delete($partnerBadge->logo_image);
        }

        // Store new logo
        $imagePath = $request->file('image')->store('homepage/partner-badge', 'public');

        $partnerBadge->update([
            'logo_image' => $imagePath
        ]);

        return back()->with('success', 'Partner logo updated successfully!');
    }

    public function deletePartnerLogo()
    {
        $partnerBadge = HomepagePartnerBadge::active()->first();

        if (!$partnerBadge || !$partnerBadge->logo_image) {
            return back()->withErrors(['error' => 'No partner logo found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($partnerBadge->logo_image);

        // Remove image path from database
        $partnerBadge->update([
            'logo_image' => null
        ]);

        return back()->with('success', 'Partner logo deleted successfully!');
    }

    public function updateWhatWeDo(Request $request)
    {
        $request->validate([
            'label' => 'required|string|max:255',
            'heading' => 'required|string|max:500',
            'description' => 'required|string',
            'is_active' => 'boolean'
        ]);

        $whatWeDoSection = WhatWeDoSection::active()->first();

        if ($whatWeDoSection) {
            $whatWeDoSection->update($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        } else {
            $whatWeDoSection = WhatWeDoSection::create($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        }

        return back()->with('success', 'What We Do section updated successfully!');
    }

    public function storeWhatWeDoItem(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_svg' => 'required|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $whatWeDoSection = WhatWeDoSection::active()->first();

        if (!$whatWeDoSection) {
            return back()->withErrors(['error' => 'What We Do section not found.']);
        }

        // If no sort_order provided, set to next available
        $sortOrder = $request->sort_order ?? ($whatWeDoSection->items()->max('sort_order') + 1);

        WhatWeDoItem::create([
            'what_we_do_section_id' => $whatWeDoSection->id,
            'title' => $request->title,
            'description' => $request->description,
            'icon_svg' => $request->icon_svg,
            'sort_order' => $sortOrder,
            'is_active' => $request->is_active ?? true
        ]);

        return back()->with('success', 'What We Do item added successfully!');
    }

    public function updateWhatWeDoItem(Request $request, WhatWeDoItem $item)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_svg' => 'required|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $item->update($request->only([
            'title', 'description', 'icon_svg', 'sort_order', 'is_active'
        ]));

        return back()->with('success', 'What We Do item updated successfully!');
    }

    public function deleteWhatWeDoItem(WhatWeDoItem $item)
    {
        $item->delete();

        return back()->with('success', 'What We Do item deleted successfully!');
    }

    public function updateOutcomes(Request $request)
    {
        $request->validate([
            'label' => 'required|string|max:255',
            'heading' => 'required|string|max:500',
            'description' => 'required|string',
            'is_active' => 'boolean'
        ]);

        $outcomesSection = OutcomesSection::active()->first();

        if ($outcomesSection) {
            $outcomesSection->update($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        } else {
            $outcomesSection = OutcomesSection::create($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        }

        return back()->with('success', 'Outcomes section updated successfully!');
    }

    public function storeOutcomesItem(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_svg' => 'required|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $outcomesSection = OutcomesSection::active()->first();

        if (!$outcomesSection) {
            return back()->withErrors(['error' => 'Outcomes section not found.']);
        }

        // If no sort_order provided, set to next available
        $sortOrder = $request->sort_order ?? ($outcomesSection->items()->max('sort_order') + 1);

        OutcomesItem::create([
            'outcomes_section_id' => $outcomesSection->id,
            'title' => $request->title,
            'description' => $request->description,
            'icon_svg' => $request->icon_svg,
            'sort_order' => $sortOrder,
            'is_active' => $request->is_active ?? true
        ]);

        return back()->with('success', 'Outcomes item added successfully!');
    }

    public function updateOutcomesItem(Request $request, OutcomesItem $item)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_svg' => 'required|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $item->update($request->only([
            'title', 'description', 'icon_svg', 'sort_order', 'is_active'
        ]));

        return back()->with('success', 'Outcomes item updated successfully!');
    }

    public function deleteOutcomesItem(OutcomesItem $item)
    {
        $item->delete();

        return back()->with('success', 'Outcomes item deleted successfully!');
    }

    public function updateOurApproach(Request $request)
    {
        $request->validate([
            'label' => 'required|string|max:255',
            'heading' => 'required|string|max:500',
            'description' => 'required|string',
            'image_alt' => 'nullable|string|max:255',
            'is_active' => 'boolean'
        ]);

        $ourApproachSection = OurApproachSection::active()->first();

        if ($ourApproachSection) {
            $ourApproachSection->update($request->only([
                'label', 'heading', 'description', 'image_alt', 'is_active'
            ]));
        } else {
            $ourApproachSection = OurApproachSection::create($request->only([
                'label', 'heading', 'description', 'image_alt', 'is_active'
            ]));
        }

        return back()->with('success', 'Our Approach section updated successfully!');
    }

    public function uploadOurApproachImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $ourApproachSection = OurApproachSection::active()->first();

        if (!$ourApproachSection) {
            return back()->withErrors(['error' => 'Our Approach section not found.']);
        }

        // Delete old image if exists
        if ($ourApproachSection->image_path) {
            Storage::disk('public')->delete($ourApproachSection->image_path);
        }

        // Store new image
        $imagePath = $request->file('image')->store('homepage/our-approach', 'public');

        $ourApproachSection->update([
            'image_path' => $imagePath
        ]);

        return back()->with('success', 'Our Approach image updated successfully!');
    }

    public function deleteOurApproachImage()
    {
        $ourApproachSection = OurApproachSection::active()->first();

        if (!$ourApproachSection || !$ourApproachSection->image_path) {
            return back()->withErrors(['error' => 'No approach image found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($ourApproachSection->image_path);

        // Remove image path from database
        $ourApproachSection->update([
            'image_path' => null
        ]);

        return back()->with('success', 'Our Approach image deleted successfully!');
    }

    public function updateSeoSettings(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'keywords' => 'nullable|string',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:500',
            'og_url' => 'nullable|url',
            'twitter_card' => 'nullable|string|in:summary,summary_large_image,app,player',
            'twitter_title' => 'nullable|string|max:255',
            'twitter_description' => 'nullable|string|max:500',
            'custom_head_tags' => 'nullable|string',
            'is_active' => 'boolean'
        ]);

        $seoSettings = HomepageSeoSetting::active()->first();

        if ($seoSettings) {
            $seoSettings->update($request->only([
                'title', 'description', 'keywords', 'og_title', 'og_description',
                'og_url', 'twitter_card', 'twitter_title', 'twitter_description',
                'custom_head_tags', 'is_active'
            ]));
        } else {
            $seoSettings = HomepageSeoSetting::create($request->only([
                'title', 'description', 'keywords', 'og_title', 'og_description',
                'og_url', 'twitter_card', 'twitter_title', 'twitter_description',
                'custom_head_tags', 'is_active'
            ]));
        }

        return back()->with('success', 'SEO settings updated successfully!');
    }

    public function uploadSeoImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'type' => 'required|in:og_image,twitter_image'
        ]);

        $seoSettings = HomepageSeoSetting::active()->first();

        if (!$seoSettings) {
            return back()->withErrors(['error' => 'SEO settings not found.']);
        }

        $type = $request->type;
        $fieldName = $type;

        // Delete old image if exists
        if ($seoSettings->$fieldName) {
            Storage::disk('public')->delete($seoSettings->$fieldName);
        }

        // Store new image
        $imagePath = $request->file('image')->store('homepage/seo', 'public');

        $seoSettings->update([
            $fieldName => $imagePath
        ]);

        return back()->with('success', ucfirst(str_replace('_', ' ', $type)) . ' updated successfully!');
    }

    public function deleteSeoImage(Request $request)
    {
        $request->validate([
            'type' => 'required|in:og_image,twitter_image'
        ]);

        $seoSettings = HomepageSeoSetting::active()->first();
        $type = $request->type;

        if (!$seoSettings || !$seoSettings->$type) {
            return back()->withErrors(['error' => 'No ' . str_replace('_', ' ', $type) . ' found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($seoSettings->$type);

        // Remove image path from database
        $seoSettings->update([
            $type => null
        ]);

        return back()->with('success', ucfirst(str_replace('_', ' ', $type)) . ' deleted successfully!');
    }

    public function updateCoreServices(Request $request)
    {
        $request->validate([
            'label' => 'required|string|max:255',
            'heading' => 'required|string|max:500',
            'description' => 'required|string',
            'is_active' => 'boolean'
        ]);

        $coreServicesSection = CoreServicesSection::first();

        if ($coreServicesSection) {
            $coreServicesSection->update($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        } else {
            $coreServicesSection = CoreServicesSection::create($request->only([
                'label', 'heading', 'description', 'is_active'
            ]));
        }

        return back()->with('success', 'Core Services section updated successfully!');
    }

    public function storeCoreService(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon_svg' => 'required|string',
            'link_url' => 'nullable|string|max:255',
            'tags' => 'array',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        // Get or create the core services section
        $coreServicesSection = CoreServicesSection::first();
        if (!$coreServicesSection) {
            $coreServicesSection = CoreServicesSection::create([
                'label' => 'Core Services',
                'heading' => 'Databricks Services We Deliver',
                'description' => 'From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.',
                'is_active' => true
            ]);
        }

        // If no sort_order provided, set to next available
        $sortOrder = $request->sort_order ?? (CoreService::where('core_services_section_id', $coreServicesSection->id)->max('sort_order') + 1);

        CoreService::create([
            'core_services_section_id' => $coreServicesSection->id,
            'title' => $request->title,
            'description' => $request->description,
            'icon_svg' => $request->icon_svg,
            'link_url' => $request->link_url,
            'tags' => $request->tags,
            'sort_order' => $sortOrder,
            'is_active' => $request->is_active ?? true
        ]);

        return back()->with('success', 'Core Service added successfully!');
    }

    public function updateCoreService(Request $request, CoreService $service)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon_svg' => 'required|string',
            'link_url' => 'nullable|string|max:255',
            'tags' => 'array',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $service->update($request->only([
            'title', 'description', 'icon_svg', 'link_url', 'tags', 'sort_order', 'is_active'
        ]));

        return back()->with('success', 'Core Service updated successfully!');
    }

    public function deleteCoreService(CoreService $service)
    {
        $service->delete();

        return back()->with('success', 'Core Service deleted successfully!');
    }
}
