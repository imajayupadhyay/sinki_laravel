<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background-color: #121212;
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }
        .email-header p {
            margin: 10px 0 0;
            font-size: 14px;
            color: #FF3621;
        }
        .email-body {
            padding: 30px;
        }
        .email-body h2 {
            color: #121212;
            font-size: 20px;
            margin-bottom: 20px;
            border-bottom: 2px solid #FF3621;
            padding-bottom: 10px;
        }
        .info-row {
            margin-bottom: 15px;
            padding: 12px;
            background-color: #f9f9f9;
            border-left: 4px solid #FF3621;
            border-radius: 4px;
        }
        .info-label {
            font-weight: bold;
            color: #121212;
            display: inline-block;
            width: 120px;
        }
        .info-value {
            color: #555;
        }
        .message-box {
            background-color: #f5f5dc;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            border-left: 4px solid #FF3621;
        }
        .message-box h3 {
            margin-top: 0;
            color: #121212;
            font-size: 16px;
        }
        .message-box p {
            margin: 0;
            color: #333;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .email-footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #ddd;
        }
        .email-footer p {
            margin: 5px 0;
            font-size: 12px;
            color: #777;
        }
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="email-header">
            <h1>New Contact Form Submission</h1>
            <p>Sinki.ai Website</p>
        </div>

        <!-- Body -->
        <div class="email-body">
            <h2>Contact Information</h2>

            <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">{{ $contact->name }}</span>
            </div>

            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:{{ $contact->email }}" style="color: #FF3621; text-decoration: none;">{{ $contact->email }}</a></span>
            </div>

            <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value"><a href="tel:{{ $contact->phone }}" style="color: #FF3621; text-decoration: none;">{{ $contact->phone }}</a></span>
            </div>

            <div class="info-row">
                <span class="info-label">Company:</span>
                <span class="info-value">{{ $contact->company }}</span>
            </div>

            <div class="info-row">
                <span class="info-label">Service:</span>
                <span class="info-value">{{ $contact->services }}</span>
            </div>

            <!-- Message -->
            <div class="message-box">
                <h3>Message:</h3>
                <p>{{ $contact->message }}</p>
            </div>

            <div class="divider"></div>

            <h2>Location & Technical Details</h2>

            <div class="info-row">
                <span class="info-label">Country:</span>
                <span class="info-value">{{ $contact->country }}</span>
            </div>

            <div class="info-row">
                <span class="info-label">City:</span>
                <span class="info-value">{{ $contact->city }}</span>
            </div>

            <div class="info-row">
                <span class="info-label">IP Address:</span>
                <span class="info-value">{{ $contact->ip_address }}</span>
            </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <p><strong>Sinki.ai</strong> - Databricks Consulting Services</p>
            <p>Submitted on {{ $contact->created_at->format('F j, Y \a\t g:i A') }}</p>
        </div>
    </div>
</body>
</html>
