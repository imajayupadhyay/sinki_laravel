<?php
namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use App\Mail\SubscribeNotification;

class SubscribeController extends Controller
{
    // public function store(Request $request)
    // {

    //     // dd($request->all());
    //     $request->validate([
    //         'email' => 'required|email|unique:subscribers,email'
    //     ]);

    //     // Get IP
    //     $ip = $request->ip();

    //     // Get location from IP
    //     $geo = Http::get("http://ip-api.com/json/{$ip}")->json();

    //     $subscriber = Subscriber::create([
    //         'email' => $request->email,
    //         'ip_address' => $ip,
    //         'country' => $geo['country'] ?? null,
    //         'city' => $geo['city'] ?? null,
    //     ]);

    //     // Send admin mail
    //     $adminEmail = env('ADMIN_EMAIL', 'leads@jellyfishtechnologies.com');

    //     Mail::to($adminEmail)->send(new SubscribeNotification($subscriber));

    //     return response()->json(['message' => 'Subscribed successfully']);
    // }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscribers,email'
        ]);

        $ip = $request->ip();

        $country = null;
        $city = null;

        try {
            if (!in_array($ip, ['127.0.0.1', '::1'])) {
                $geo = Http::timeout(3)->get("http://ip-api.com/json/{$ip}");

                if ($geo->ok() && $geo->json('status') === 'success') {
                    $country = $geo->json('country');
                    $city = $geo->json('city');
                }
            }
        } catch (\Exception $e) {
            Log::warning('IP lookup failed: ' . $e->getMessage());
        }

        $subscriber = Subscriber::create([
            'email' => $request->email,
            'ip_address' => $ip,
            'country' => $country,
            'city' => $city,
        ]);

        // Never allow mail to break the API
        try {
            $adminEmail = env('ADMIN_EMAIL', 'leads@jellyfishtechnologies.com');
            Mail::to($adminEmail)->send(new SubscribeNotification($subscriber));
        } catch (\Exception $e) {
            Log::error('Subscribe email failed: ' . $e->getMessage());
        }

        return response()->json([
            // 'message' => 'Subscribed successfully'
            'success' => true,
            'message' => 'Subscribed successfully'
        ]);
    }

}
