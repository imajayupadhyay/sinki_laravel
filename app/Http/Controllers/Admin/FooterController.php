<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FooterContent;
use App\Models\FooterLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FooterController extends Controller
{
    public function index()
    {
        $footerContent = FooterContent::where('is_active', true)->first();
        $footerLinks = FooterLink::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->groupBy('section');

        return Inertia::render('Admin/Footer/Index', [
            'footerContent' => $footerContent,
            'footerLinks' => $footerLinks
        ]);
    }

    public function updateContent(Request $request)
    {
        $request->validate([
            'logo_url' => 'nullable|string|max:255',
            'description' => 'required|string',
            'copyright_text' => 'required|string|max:255'
        ]);

        $footerContent = FooterContent::where('is_active', true)->first();

        if ($footerContent) {
            $footerContent->update($request->only(['logo_url', 'description', 'copyright_text']));
        } else {
            FooterContent::create(array_merge(
                $request->only(['logo_url', 'description', 'copyright_text']),
                ['is_active' => true]
            ));
        }

        return back()->with('success', 'Footer content updated successfully');
    }

    public function storeLink(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'required|string|max:255',
            'section' => 'required|in:quick_links,services,bottom_links',
            'order' => 'required|integer|min:0'
        ]);

        FooterLink::create($request->all());

        return back()->with('success', 'Footer link added successfully');
    }

    public function updateLink(Request $request, FooterLink $link)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'required|string|max:255',
            'section' => 'required|in:quick_links,services,bottom_links',
            'order' => 'required|integer|min:0'
        ]);

        $link->update($request->all());

        return back()->with('success', 'Footer link updated successfully');
    }

    public function destroyLink(FooterLink $link)
    {
        $link->delete();

        return back()->with('success', 'Footer link deleted successfully');
    }
}
