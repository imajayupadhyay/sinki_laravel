<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageUploadController extends Controller
{
    public function uploadFeaturedImage(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048', // 5MB max
            ]);

            $image = $request->file('image');

            if (!$image) {
                return response()->json([
                    'success' => false,
                    'message' => 'No image file received'
                ], 400);
            }

            // Generate unique filename
            $filename = time() . '_' . Str::random(10) . '.' . $image->getClientOriginalExtension();

            // Store in public/blog-images directory
            $path = $image->storeAs('blog-images', $filename, 'public');

            // Return the full URL
            $url = Storage::url($path);

            return response()->json([
                'success' => true,
                'url' => $url,
                'path' => $path,
                'message' => 'Image uploaded successfully'
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            \Log::error('Image upload failed: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to upload image: ' . $e->getMessage()
            ], 500);
        }
    }

    public function deleteImage(Request $request)
    {
        $request->validate([
            'path' => 'required|string'
        ]);

        try {
            $path = $request->path;

            // Remove /storage/ prefix if present and get actual path
            $actualPath = str_replace('/storage/', '', $path);

            if (Storage::disk('public')->exists($actualPath)) {
                Storage::disk('public')->delete($actualPath);

                return response()->json([
                    'success' => true,
                    'message' => 'Image deleted successfully'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'Image not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete image: ' . $e->getMessage()
            ], 500);
        }
    }
}
