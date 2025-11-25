<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutUsHeroSection;
use App\Models\AboutUsPartnerBadge;
use App\Models\AboutUsStorySection;
use App\Models\AboutUsWhatWeDoSection;
use App\Models\AboutUsWhatWeDoItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AboutUsController extends Controller
{
    public function index()
    {
        $heroSection = AboutUsHeroSection::active()->first();
        $partnerBadge = AboutUsPartnerBadge::active()->first();
        $storySection = AboutUsStorySection::active()->first();
        $whatWeDoSection = AboutUsWhatWeDoSection::with(['items' => function($query) {
            $query->active()->orderBy('sort_order');
        }])->active()->first();

        return Inertia::render('Admin/AboutUs/Index', [
            'heroSection' => $heroSection,
            'partnerBadge' => $partnerBadge,
            'storySection' => $storySection,
            'whatWeDoSection' => $whatWeDoSection
        ]);
    }

    public function updateHero(Request $request)
    {
        $request->validate([
            'heading' => 'required|string|max:255',
            'paragraph' => 'required|string',
            'cta_text' => 'nullable|string|max:255',
            'cta_link' => 'nullable|string|max:255',
            'is_active' => 'boolean'
        ]);

        $heroSection = AboutUsHeroSection::active()->first();

        if ($heroSection) {
            $heroSection->update($request->only([
                'heading', 'paragraph', 'cta_text', 'cta_link', 'is_active'
            ]));
        } else {
            $heroSection = AboutUsHeroSection::create($request->only([
                'heading', 'paragraph', 'cta_text', 'cta_link', 'is_active'
            ]));
        }

        return back()->with('success', 'About Us hero section updated successfully!');
    }

    public function uploadHeroImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $heroSection = AboutUsHeroSection::active()->first();

        if (!$heroSection) {
            return back()->withErrors(['error' => 'About Us hero section not found.']);
        }

        // Delete old image if exists
        if ($heroSection->background_image) {
            Storage::disk('public')->delete($heroSection->background_image);
        }

        // Store new image
        $imagePath = $request->file('image')->store('about-us/hero', 'public');

        $heroSection->update([
            'background_image' => $imagePath
        ]);

        return back()->with('success', 'About Us hero background image updated successfully!');
    }

    public function deleteHeroImage()
    {
        $heroSection = AboutUsHeroSection::active()->first();

        if (!$heroSection || !$heroSection->background_image) {
            return back()->withErrors(['error' => 'No background image found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($heroSection->background_image);

        // Remove image path from database
        $heroSection->update([
            'background_image' => null
        ]);

        return back()->with('success', 'About Us hero background image deleted successfully!');
    }

    public function updatePartnerBadge(Request $request)
    {
        $request->validate([
            'text' => 'required|string|max:255',
            'logo_alt' => 'nullable|string|max:255',
            'is_active' => 'boolean'
        ]);

        $partnerBadge = AboutUsPartnerBadge::active()->first();

        if ($partnerBadge) {
            $partnerBadge->update($request->only([
                'text', 'logo_alt', 'is_active'
            ]));
        } else {
            $partnerBadge = AboutUsPartnerBadge::create($request->only([
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

        $partnerBadge = AboutUsPartnerBadge::active()->first();

        if (!$partnerBadge) {
            return back()->withErrors(['error' => 'Partner badge not found.']);
        }

        // Delete old logo if exists
        if ($partnerBadge->logo_image) {
            Storage::disk('public')->delete($partnerBadge->logo_image);
        }

        // Store new logo
        $imagePath = $request->file('image')->store('about-us/partner-badge', 'public');

        $partnerBadge->update([
            'logo_image' => $imagePath
        ]);

        return back()->with('success', 'Partner logo updated successfully!');
    }

    public function deletePartnerLogo()
    {
        $partnerBadge = AboutUsPartnerBadge::active()->first();

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

    public function updateStorySection(Request $request)
    {
        $request->validate([
            'header_tag' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'descriptions' => 'required|array',
            'descriptions.*' => 'required|string',
            'image_alt' => 'nullable|string|max:255',
            'image_position' => 'required|in:left,right',
            'background_color' => 'required|string|max:255',
            'is_active' => 'boolean'
        ]);

        $storySection = AboutUsStorySection::active()->first();

        if ($storySection) {
            $storySection->update($request->only([
                'header_tag', 'title', 'subtitle', 'descriptions', 'image_alt', 'image_position', 'background_color', 'is_active'
            ]));
        } else {
            $storySection = AboutUsStorySection::create($request->only([
                'header_tag', 'title', 'subtitle', 'descriptions', 'image_alt', 'image_position', 'background_color', 'is_active'
            ]));
        }

        return back()->with('success', 'Story section updated successfully!');
    }

    public function uploadStoryImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $storySection = AboutUsStorySection::active()->first();

        if (!$storySection) {
            return back()->withErrors(['error' => 'Story section not found.']);
        }

        // Delete old image if exists
        if ($storySection->image_path) {
            Storage::disk('public')->delete($storySection->image_path);
        }

        // Store new image
        $imagePath = $request->file('image')->store('about-us/story', 'public');

        $storySection->update([
            'image_path' => $imagePath
        ]);

        return back()->with('success', 'Story image updated successfully!');
    }

    public function deleteStoryImage()
    {
        $storySection = AboutUsStorySection::active()->first();

        if (!$storySection || !$storySection->image_path) {
            return back()->withErrors(['error' => 'No story image found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($storySection->image_path);

        // Remove image path from database
        $storySection->update([
            'image_path' => null
        ]);

        return back()->with('success', 'Story image deleted successfully!');
    }

    public function updateWhatWeDo(Request $request)
    {
        $request->validate([
            'header_tag' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string',
            'is_active' => 'boolean'
        ]);

        $whatWeDoSection = AboutUsWhatWeDoSection::active()->first();

        if ($whatWeDoSection) {
            $whatWeDoSection->update($request->only([
                'header_tag', 'title', 'subtitle', 'is_active'
            ]));
        } else {
            $whatWeDoSection = AboutUsWhatWeDoSection::create($request->only([
                'header_tag', 'title', 'subtitle', 'is_active'
            ]));
        }

        return back()->with('success', 'What We Do section updated successfully!');
    }

    public function uploadWhatWeDoBackground(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $whatWeDoSection = AboutUsWhatWeDoSection::active()->first();

        if (!$whatWeDoSection) {
            return back()->withErrors(['error' => 'What We Do section not found.']);
        }

        // Delete old image if exists
        if ($whatWeDoSection->background_image) {
            Storage::disk('public')->delete($whatWeDoSection->background_image);
        }

        // Store new image
        $imagePath = $request->file('image')->store('about-us/what-we-do', 'public');

        $whatWeDoSection->update([
            'background_image' => $imagePath
        ]);

        return back()->with('success', 'Background image updated successfully!');
    }

    public function deleteWhatWeDoBackground()
    {
        $whatWeDoSection = AboutUsWhatWeDoSection::active()->first();

        if (!$whatWeDoSection || !$whatWeDoSection->background_image) {
            return back()->withErrors(['error' => 'No background image found.']);
        }

        // Delete image file
        Storage::disk('public')->delete($whatWeDoSection->background_image);

        // Remove image path from database
        $whatWeDoSection->update([
            'background_image' => null
        ]);

        return back()->with('success', 'Background image deleted successfully!');
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

        $whatWeDoSection = AboutUsWhatWeDoSection::active()->first();

        if (!$whatWeDoSection) {
            return back()->withErrors(['error' => 'What We Do section not found.']);
        }

        // If no sort_order provided, set to next available
        $sortOrder = $request->sort_order ?? ($whatWeDoSection->items()->max('sort_order') + 1);

        AboutUsWhatWeDoItem::create([
            'what_we_do_section_id' => $whatWeDoSection->id,
            'title' => $request->title,
            'description' => $request->description,
            'icon_svg' => $request->icon_svg,
            'sort_order' => $sortOrder,
            'is_active' => $request->is_active ?? true
        ]);

        return back()->with('success', 'Service item added successfully!');
    }

    public function updateWhatWeDoItem(Request $request, AboutUsWhatWeDoItem $item)
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

        return back()->with('success', 'Service item updated successfully!');
    }

    public function deleteWhatWeDoItem(AboutUsWhatWeDoItem $item)
    {
        $item->delete();

        return back()->with('success', 'Service item deleted successfully!');
    }
}