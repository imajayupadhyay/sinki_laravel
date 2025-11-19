<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\ServicePage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = new \SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        // Add homepage
        $this->addUrl($sitemap, url('/'), now(), 'weekly', '1.0');

        // Add static pages
        $this->addUrl($sitemap, route('contact'), now(), 'monthly', '0.8');
        $this->addUrl($sitemap, route('blog.index'), now(), 'weekly', '0.9');
        $this->addUrl($sitemap, route('services.index'), now(), 'weekly', '0.9');
        $this->addUrl($sitemap, route('terms'), now(), 'yearly', '0.3');
        $this->addUrl($sitemap, route('privacy-policy'), now(), 'yearly', '0.3');

        // Add published blogs
        $blogs = Blog::published()
            ->orderBy('published_at', 'desc')
            ->get();

        foreach ($blogs as $blog) {
            $this->addUrl(
                $sitemap,
                route('blog.show', $blog->slug),
                $blog->updated_at,
                'monthly',
                '0.7'
            );
        }

        // Add published service pages
        $servicePages = ServicePage::published()
            ->orderBy('updated_at', 'desc')
            ->get();

        foreach ($servicePages as $servicePage) {
            $this->addUrl(
                $sitemap,
                route('services.show', $servicePage->slug),
                $servicePage->updated_at,
                'monthly',
                '0.8'
            );
        }

        return response($sitemap->asXML(), 200)
            ->header('Content-Type', 'application/xml');
    }

    private function addUrl($sitemap, $loc, $lastmod = null, $changefreq = null, $priority = null)
    {
        $url = $sitemap->addChild('url');
        $url->addChild('loc', htmlspecialchars($loc));

        if ($lastmod) {
            $url->addChild('lastmod', $lastmod->toISOString());
        }

        if ($changefreq) {
            $url->addChild('changefreq', $changefreq);
        }

        if ($priority) {
            $url->addChild('priority', $priority);
        }
    }
}