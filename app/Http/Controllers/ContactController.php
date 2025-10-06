<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormSubmitted;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page
     */
    public function index()
    {
        return Inertia::render('Contact');
    }

    /**
     * Display the thank you page
     */
    public function thankYou()
    {
        return Inertia::render('ThankYou');
    }

    /**
     * Store a new contact form submission
     */
    public function store(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'company' => 'required|string|max:255',
            'services' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Get IP address
        $ipAddress = $this->getClientIP($request);

        // Get user agent
        $userAgent = $request->header('User-Agent');

        // Get geolocation data
        $location = $this->getLocationByIP($ipAddress);

        // Create contact record
        $contact = Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'company' => $validated['company'],
            'services' => $validated['services'],
            'message' => $validated['message'],
            'country' => $location['country'],
            'city' => $location['city'],
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
        ]);

        // Log the submission
        Log::info('Contact form submitted', [
            'contact_id' => $contact->id,
            'email' => $contact->email,
            'country' => $contact->country,
            'city' => $contact->city,
        ]);

        // Send email notification to admin
        $this->sendAdminNotification($contact);

        // Redirect to thank you page
        return redirect()->route('thank-you');
    }

    /**
     * Get client IP address
     */
    private function getClientIP(Request $request): string
    {
        // Check for IP in various headers (for proxies/load balancers)
        $ipAddress = $request->header('X-Forwarded-For');
        
        if ($ipAddress) {
            // X-Forwarded-For can contain multiple IPs, get the first one
            $ipArray = explode(',', $ipAddress);
            $ipAddress = trim($ipArray[0]);
        } else {
            $ipAddress = $request->ip();
        }

        return $ipAddress ?? '127.0.0.1';
    }

    /**
     * Get location information based on IP address
     * Uses ipapi.co (free service with 1000 requests/day)
     */
    private function getLocationByIP(string $ipAddress): array
    {
        // Default values
        $location = [
            'country' => 'Unknown',
            'city' => 'Unknown',
        ];

        // Skip localhost/private IPs
        if ($this->isPrivateIP($ipAddress)) {
            $location['country'] = 'Local/Private';
            $location['city'] = 'Local/Private';
            return $location;
        }

        try {
            // Try primary service: ipapi.co
            $response = Http::timeout(5)
                ->withHeaders(['User-Agent' => 'Sinki.ai Contact Form'])
                ->get("https://ipapi.co/{$ipAddress}/json/");

            if ($response->successful()) {
                $data = $response->json();

                if ($data && !isset($data['error'])) {
                    $location['country'] = $data['country_name'] ?? 'Unknown';
                    $location['city'] = $data['city'] ?? 'Unknown';
                    return $location;
                }
            }

            // Fallback to alternative service: ip-api.com
            $response = Http::timeout(5)
                ->withHeaders(['User-Agent' => 'Sinki.ai Contact Form'])
                ->get("http://ip-api.com/json/{$ipAddress}?fields=status,country,city");

            if ($response->successful()) {
                $data = $response->json();

                if ($data && $data['status'] === 'success') {
                    $location['country'] = $data['country'] ?? 'Unknown';
                    $location['city'] = $data['city'] ?? 'Unknown';
                }
            }

        } catch (\Exception $e) {
            // Log error but don't fail the form submission
            Log::warning('Geolocation API error', [
                'ip' => $ipAddress,
                'error' => $e->getMessage(),
            ]);
        }

        return $location;
    }

    /**
     * Check if IP address is private/local
     */
    private function isPrivateIP(string $ip): bool
    {
        if (empty($ip) || $ip === '127.0.0.1' || $ip === '::1' || $ip === 'localhost') {
            return true;
        }

        // Check for private IP ranges
        $privateRanges = [
            ['10.0.0.0', '10.255.255.255'],
            ['172.16.0.0', '172.31.255.255'],
            ['192.168.0.0', '192.168.255.255'],
            ['127.0.0.0', '127.255.255.255'],
        ];

        $longIp = ip2long($ip);
        if ($longIp === false) {
            return true;
        }

        foreach ($privateRanges as $range) {
            $min = ip2long($range[0]);
            $max = ip2long($range[1]);
            if ($longIp >= $min && $longIp <= $max) {
                return true;
            }
        }

        return false;
    }

    /**
     * Send admin notification email
     */
    private function sendAdminNotification(Contact $contact): void
    {
        try {
            $adminEmail = env('ADMIN_EMAIL');

            if (!$adminEmail) {
                Log::warning('Admin email not configured');
                return;
            }

            Mail::to($adminEmail)->send(new ContactFormSubmitted($contact));

            Log::info('Admin notification email sent successfully', [
                'contact_id' => $contact->id,
                'to' => $adminEmail,
            ]);

        } catch (\Exception $e) {
            Log::error('Exception sending admin notification email', [
                'contact_id' => $contact->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
        }
    }
}