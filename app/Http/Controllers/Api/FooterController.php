<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FooterContent;
use App\Models\FooterLink;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    public function index()
    {
        $footerContent = FooterContent::where('is_active', true)->first();
        $footerLinks = FooterLink::active()->ordered()->get()->groupBy('section');

        return response()->json([
            'content' => $footerContent,
            'links' => $footerLinks
        ]);
    }
}
