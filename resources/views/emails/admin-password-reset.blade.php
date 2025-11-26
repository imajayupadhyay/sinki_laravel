<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Password Reset Request</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .otp-box {
            background-color: #fef2f2;
            border: 2px dashed #dc2626;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }
        .otp-code {
            font-size: 36px;
            font-weight: bold;
            color: #dc2626;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
            margin: 10px 0;
        }
        .warning {
            background-color: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            color: #92400e;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
        .security-notice {
            background-color: #fef2f2;
            border-left: 4px solid #dc2626;
            padding: 15px;
            margin: 20px 0;
            color: #b91c1c;
        }
        .alert-box {
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            color: #b91c1c;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔐 Password Reset Request</h1>
            <p>Sinki Admin Panel</p>
        </div>

        <div class="content">
            <h2>Reset Your Password</h2>
            <p>Someone requested a password reset for your Sinki admin account. Use the verification code below to proceed with resetting your password:</p>

            <div class="otp-box">
                <div>Your Password Reset Code:</div>
                <div class="otp-code">{{ $otpCode }}</div>
                <div><strong>Valid for {{ $expiryMinutes }} minutes</strong></div>
            </div>

            <div class="alert-box">
                <strong>🚨 Security Alert:</strong><br>
                If you did not request this password reset, please ignore this email and consider updating your account security. Someone may have tried to access your account.
            </div>

            <div class="security-notice">
                <strong>🛡️ Security Instructions:</strong><br>
                • This code will expire in {{ $expiryMinutes }} minutes<br>
                • Never share this code with anyone<br>
                • Only use this code if you requested a password reset<br>
                • Choose a strong, unique password for your new password
            </div>

            <div class="warning">
                <strong>⚠️ Important Notes:</strong><br>
                • The code is case-sensitive<br>
                • This code can only be used once<br>
                • After resetting, you'll need to login with your new password<br>
                • All existing sessions will be invalidated
            </div>

            <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                This password reset was requested from IP address: <span style="font-family: monospace;">{{ request()->ip() }}</span><br>
                Time: {{ now()->format('M d, Y at g:i A T') }}
            </p>
        </div>

        <div class="footer">
            <p>This email was sent from Sinki Admin Security System</p>
            <p>If you didn't request this password reset, please contact your system administrator immediately.</p>
            <hr style="border: none; border-top: 1px solid #e9ecef; margin: 15px 0;">
            <p>© {{ date('Y') }} Sinki.ai - All rights reserved</p>
        </div>
    </div>
</body>
</html>