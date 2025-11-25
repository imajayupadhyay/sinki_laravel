<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutUsHeroSection;
use App\Models\AboutUsPartnerBadge;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AboutUsController extends Controller
{
    public function index()
    {
        $heroSection = AboutUsHeroSection::active()->first();
        $partnerBadge = AboutUsPartnerBadge::active()->first();

        return Inertia::render('Admin/AboutUs/Index', [
            'heroSection' => $heroSection,
            'partnerBadge' => $partnerBadge
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
}