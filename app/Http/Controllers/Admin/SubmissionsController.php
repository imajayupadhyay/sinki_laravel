<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class SubmissionsController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        // Search filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('company', 'like', "%{$search}%")
                  ->orWhere('message', 'like', "%{$search}%");
            });
        }

        // Date range filter
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        // Service filter
        if ($request->filled('service')) {
            $query->where('services', 'like', "%{$request->service}%");
        }

        // Country filter
        if ($request->filled('country')) {
            $query->where('country', $request->country);
        }

        // Sort by latest first
        $submissions = $query->orderBy('created_at', 'desc')
            ->paginate(20)
            ->withQueryString()
            ->through(function ($contact) {
                return [
                    'id' => $contact->id,
                    'name' => $contact->name,
                    'email' => $contact->email,
                    'phone' => $contact->phone,
                    'company' => $contact->company,
                    'services' => $contact->services,
                    'message' => $contact->message,
                    'country' => $contact->country,
                    'city' => $contact->city,
                    'ip_address' => $contact->ip_address,
                    'user_agent' => $contact->user_agent,
                    'created_at' => $contact->created_at->format('M d, Y H:i'),
                    'created_at_human' => $contact->created_at->diffForHumans(),
                    'created_at_date' => $contact->created_at->format('Y-m-d'),
                ];
            });

        // Get filter options
        $countries = Contact::whereNotNull('country')
            ->distinct()
            ->pluck('country')
            ->sort()
            ->values();

        $services = Contact::whereNotNull('services')
            ->distinct()
            ->pluck('services')
            ->sort()
            ->values();

        // Statistics
        $stats = [
            'total' => Contact::count(),
            'today' => Contact::whereDate('created_at', today())->count(),
            'this_week' => Contact::whereBetween('created_at', [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek()
            ])->count(),
            'this_month' => Contact::whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->count(),
        ];

        return Inertia::render('Admin/Submissions/Index', [
            'submissions' => $submissions,
            'filters' => $request->only(['search', 'date_from', 'date_to', 'service', 'country']),
            'countries' => $countries,
            'services' => $services,
            'stats' => $stats
        ]);
    }

    public function show(Contact $submission)
    {
        return response()->json([
            'id' => $submission->id,
            'name' => $submission->name,
            'email' => $submission->email,
            'phone' => $submission->phone,
            'company' => $submission->company,
            'services' => $submission->services,
            'message' => $submission->message,
            'country' => $submission->country,
            'city' => $submission->city,
            'ip_address' => $submission->ip_address,
            'user_agent' => $submission->user_agent,
            'created_at' => $submission->created_at->format('M d, Y H:i:s'),
            'created_at_human' => $submission->created_at->diffForHumans(),
        ]);
    }

    public function destroy(Contact $submission)
    {
        $submission->delete();

        return redirect()->route('admin.submissions.index')
            ->with('success', 'Submission deleted successfully.');
    }

    public function export(Request $request)
    {
        $query = Contact::query();

        // Apply same filters as index
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('company', 'like', "%{$search}%")
                  ->orWhere('message', 'like', "%{$search}%");
            });
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        if ($request->filled('service')) {
            $query->where('services', 'like', "%{$request->service}%");
        }

        if ($request->filled('country')) {
            $query->where('country', $request->country);
        }

        $submissions = $query->orderBy('created_at', 'desc')->get();

        $filename = 'contact_submissions_' . now()->format('Y_m_d_His') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
        ];

        $callback = function () use ($submissions) {
            $file = fopen('php://output', 'w');

            // Add CSV headers
            fputcsv($file, [
                'ID', 'Name', 'Email', 'Phone', 'Company', 'Services',
                'Country', 'City', 'Message', 'IP Address', 'Submitted At'
            ]);

            // Add data rows
            foreach ($submissions as $submission) {
                fputcsv($file, [
                    $submission->id,
                    $submission->name,
                    $submission->email,
                    $submission->phone,
                    $submission->company,
                    $submission->services,
                    $submission->country,
                    $submission->city,
                    $submission->message,
                    $submission->ip_address,
                    $submission->created_at->format('Y-m-d H:i:s'),
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
}