# SSR Deployment Guide for sinki.ai

## Files to Transfer to Server

1. **deploy-server-ssr.sh** - Server deployment script
2. **nginx-config-with-ssr.conf** - Nginx configuration with SSR support

## Deployment Steps

### 1. Upload Deployment Script
```bash
# Copy the deployment script to your server
scp deploy-server-ssr.sh user@your-server:/var/www/sinki.io/

# Make it executable on server
chmod +x /var/www/sinki.io/deploy-server-ssr.sh
```

### 2. Configure Nginx
```bash
# Backup current nginx config
sudo cp /etc/nginx/sites-available/sinki.ai /etc/nginx/sites-available/sinki.ai.backup

# Copy new SSR config
sudo cp nginx-config-with-ssr.conf /etc/nginx/sites-available/sinki.ai

# Test nginx configuration
sudo nginx -t

# Reload nginx if test passes
sudo systemctl reload nginx
```

### 3. Run Deployment
```bash
# Navigate to project directory
cd /var/www/sinki.io

# Run the SSR deployment script
sudo ./deploy-server-ssr.sh
```

## Key Changes in SSR Deployment

### Deployment Script Changes:
- ✅ Pulls from `ssr` branch instead of `main`
- ✅ Handles SSR daemon (ssr.js) from bootstrap/ssr/ directory
- ✅ PM2 process management for SSR daemon
- ✅ Systemd fallback if PM2 not available
- ✅ SSR endpoint testing (port 13714)
- ✅ Enhanced error handling and logging

### Nginx Configuration Features:
- ✅ Rate limiting for SSR endpoint protection
- ✅ Upstream configuration for SSR backend (port 13714)
- ✅ SSR-specific headers
- ✅ Enhanced caching for static assets
- ✅ HTTP/2 server push for critical resources
- ✅ Security headers and file protection
- ✅ SSL/HTTPS configuration ready

## Verification Steps

After deployment, verify:

1. **Website loads**: https://sinki.ai
2. **SSR working**: View page source (Ctrl+U) - should show full HTML content
3. **SSR daemon status**:
   - PM2: `pm2 status sinki-ssr`
   - Systemd: `sudo systemctl status sinki-ssr`
4. **SSR endpoint**: `curl -X POST http://127.0.0.1:13714 -H "Content-Type: application/json" -d '{"component":"Home","props":{}}'`
5. **Nginx logs**: `tail -f /var/log/nginx/sinki.ai-access.log`

## Troubleshooting

### SSR Daemon Issues:
```bash
# Check PM2 logs
pm2 logs sinki-ssr

# Check systemd logs
sudo journalctl -u sinki-ssr -f

# Check SSR build files
ls -la /var/www/sinki.io/bootstrap/ssr/
```

### Nginx Issues:
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/sinki.ai-error.log

# Check if upstream is responding
curl -I http://127.0.0.1:13714
```

### Laravel Issues:
```bash
# Check Laravel logs
tail -f /var/www/sinki.io/storage/logs/laravel.log

# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## Important Notes

- The deployment script requires root/sudo privileges
- SSR daemon runs on port 13714 by default
- Make sure your Laravel app has SSR properly configured
- PM2 is preferred for process management
- All static assets are aggressively cached for performance
- SSL certificates are managed by Certbot/Let's Encrypt

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Page source shows full HTML (SSR working)
- [ ] Mobile-friendly test passes
- [ ] SSL certificate is valid
- [ ] All static assets loading
- [ ] No errors in nginx/PHP/Laravel logs
- [ ] SSR daemon is running and stable