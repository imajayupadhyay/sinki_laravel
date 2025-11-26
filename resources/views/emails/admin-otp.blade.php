<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Security Verification</title>
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            background-color: #f8f9fa;
            border: 2px dashed #667eea;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }
        .otp-code {
            font-size: 36px;
            font-weight: bold;
            color: #667eea;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
            margin: 10px 0;
        }
        .warning {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            color: #856404;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
        .security-notice {
            background-color: #e3f2fd;
            border-left: 4px solid #2196f3;
            padding: 15px;
            margin: 20px 0;
            color: #0d47a1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔐 Admin Security Verification</h1>
            <p>Sinki Admin Panel Access</p>
        </div>

        <div class="content">
            <h2>Your Verification Code</h2>
            <p>Someone is trying to access the Sinki admin panel with your credentials. Please use the verification code below to complete the login process:</p>

            <div class="otp-box">
                <div>Your OTP Code is:</div>
                <div class="otp-code">{{ $otpCode }}</div>
                <div><strong>Valid for {{ $expiryMinutes }} minutes</strong></div>
            </div>

            <div class="security-notice">
                <strong>🛡️ Security Notice:</strong><br>
                This code will expire in {{ $expiryMinutes }} minutes for your security. If you didn't attempt to log in, please ignore this email and consider changing your password.
            </div>

            <div class="warning">
                <strong>⚠️ Important:</strong><br>
                • Never share this code with anyone<br>
                • Only use this code if you initiated the login<br>
                • The code is case-sensitive<br>
                • This code can only be used once
            </div>
        </div>

        <div class="footer">
            <p>This email was sent from Sinki Admin Security System</p>
            <p>If you didn't request this code, please contact your system administrator immediately.</p>
            <hr style="border: none; border-top: 1px solid #e9ecef; margin: 15px 0;">
            <p>© {{ date('Y') }} Sinki.ai - All rights reserved</p>
        </div>
    </div>
</body>
</html>