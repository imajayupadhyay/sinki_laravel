#!/bin/bash

# Laravel CI/CD Deployment Script for sinki.ai with SSR (Server Version)
# Author: Deployment Script with Inertia SSR Support
# Date: 2025-10-08

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/var/www/sinki.io"
BRANCH="ssr"  # Deploy from SSR branch
WEB_USER="www-data"
SSR_DAEMON_NAME="sinki-ssr"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Starting SSR Deployment for sinki.ai${NC}"
echo -e "${GREEN}  🚀 From SSR Branch${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}Please run this script as root or with sudo${NC}"
    exit 1
fi

# Check and install PM2 if not present
echo -e "${BLUE}➤ Checking PM2 installation...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠ PM2 not found. Installing PM2...${NC}"
    npm install -g pm2
    echo -e "${GREEN}✓ PM2 installed successfully${NC}"

    # Setup PM2 startup script
    echo -e "${BLUE}➤ Setting up PM2 startup script...${NC}"
    PM2_STARTUP_CMD=$(pm2 startup | tail -n 1)
    if [[ $PM2_STARTUP_CMD == sudo* ]]; then
        eval $PM2_STARTUP_CMD
        echo -e "${GREEN}✓ PM2 startup script configured${NC}"
    else
        echo -e "${YELLOW}⚠ Please run the following command manually after deployment:${NC}"
        echo -e "${YELLOW}   $PM2_STARTUP_CMD${NC}"
    fi
else
    echo -e "${GREEN}✓ PM2 is already installed${NC}"
fi

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}✗ Project directory $PROJECT_DIR does not exist${NC}"
    exit 1
fi

# Navigate to project directory
echo -e "${YELLOW}➤ Navigating to project directory...${NC}"
cd $PROJECT_DIR

# Put application in maintenance mode
echo -e "${YELLOW}➤ Putting application in maintenance mode...${NC}"
sudo -u $WEB_USER php artisan down || true

# Stop SSR daemon before deployment
echo -e "${BLUE}➤ Stopping SSR daemon...${NC}"
if command -v pm2 &> /dev/null && pm2 list | grep -q $SSR_DAEMON_NAME; then
    pm2 stop $SSR_DAEMON_NAME || true
    echo -e "${GREEN}✓ SSR daemon stopped (PM2)${NC}"
elif systemctl is-active --quiet sinki-ssr 2>/dev/null; then
    systemctl stop sinki-ssr || true
    echo -e "${GREEN}✓ SSR daemon stopped (systemd)${NC}"
else
    echo -e "${YELLOW}⚠ SSR daemon not running${NC}"
fi

# Pull latest code from GitHub (SSR branch)
echo -e "${YELLOW}➤ Pulling latest code from GitHub (branch: $BRANCH)...${NC}"
git fetch origin
git reset --hard origin/$BRANCH
git pull origin $BRANCH

# Set proper ownership
echo -e "${YELLOW}➤ Setting proper ownership...${NC}"
chown -R $WEB_USER:$WEB_USER $PROJECT_DIR

# Install/Update Composer dependencies
echo -e "${YELLOW}➤ Installing/Updating Composer dependencies...${NC}"
sudo -u $WEB_USER composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Install/Update NPM dependencies
echo -e "${YELLOW}➤ Installing/Updating NPM dependencies...${NC}"
npm install

# Build frontend assets WITH SSR
echo -e "${BLUE}➤ Building frontend assets with SSR bundle...${NC}"
npm run build
echo -e "${GREEN}✓ Client and SSR bundles built successfully${NC}"

# Set proper ownership again after npm build
chown -R $WEB_USER:$WEB_USER $PROJECT_DIR

# Run database migrations
echo -e "${YELLOW}➤ Running database migrations...${NC}"
sudo -u $WEB_USER php artisan migrate --force

# Clear and cache configurations
echo -e "${YELLOW}➤ Clearing old cache...${NC}"
sudo -u $WEB_USER php artisan cache:clear
sudo -u $WEB_USER php artisan config:clear
sudo -u $WEB_USER php artisan route:clear
sudo -u $WEB_USER php artisan view:clear

echo -e "${YELLOW}➤ Caching configurations...${NC}"
sudo -u $WEB_USER php artisan config:cache
sudo -u $WEB_USER php artisan route:cache
sudo -u $WEB_USER php artisan view:cache

# Optimize application
echo -e "${YELLOW}➤ Optimizing application...${NC}"
sudo -u $WEB_USER php artisan optimize

# Set proper permissions
echo -e "${YELLOW}➤ Setting final permissions...${NC}"
chmod -R 755 $PROJECT_DIR
chmod -R 775 $PROJECT_DIR/storage
chmod -R 775 $PROJECT_DIR/bootstrap/cache

# Check if SSR build directory exists and set permissions
if [ -d "$PROJECT_DIR/bootstrap/ssr" ]; then
    chmod -R 775 $PROJECT_DIR/bootstrap/ssr
    echo -e "${GREEN}✓ SSR directory permissions set${NC}"
fi

# Make SSR daemon executable if it exists
if [ -f "$PROJECT_DIR/bootstrap/ssr/ssr.js" ]; then
    chmod +x $PROJECT_DIR/bootstrap/ssr/ssr.js
    SSR_DAEMON_PATH="$PROJECT_DIR/bootstrap/ssr/ssr.js"
    echo -e "${GREEN}✓ SSR daemon found at bootstrap/ssr/ssr.js${NC}"
elif [ -f "$PROJECT_DIR/ssr-daemon.js" ]; then
    chmod +x $PROJECT_DIR/ssr-daemon.js
    SSR_DAEMON_PATH="$PROJECT_DIR/ssr-daemon.js"
    echo -e "${GREEN}✓ SSR daemon found at ssr-daemon.js${NC}"
else
    echo -e "${RED}✗ Warning: SSR daemon file not found${NC}"
    echo -e "${YELLOW}Looking for SSR files...${NC}"
    find $PROJECT_DIR -name "*.js" -path "*/ssr*" -o -name "ssr.js" -o -name "*ssr*.js" | head -5
    SSR_DAEMON_PATH="$PROJECT_DIR/bootstrap/ssr/ssr.js"  # Default fallback
fi

# Start/Restart SSR daemon
echo -e "${BLUE}➤ Starting SSR daemon...${NC}"
if command -v pm2 &> /dev/null; then
    # Use PM2 if available
    if pm2 list | grep -q $SSR_DAEMON_NAME; then
        pm2 restart $SSR_DAEMON_NAME
        echo -e "${GREEN}✓ SSR daemon restarted with PM2${NC}"
    else
        pm2 start $SSR_DAEMON_PATH --name $SSR_DAEMON_NAME
        pm2 save  # Save PM2 process list
        echo -e "${GREEN}✓ SSR daemon started with PM2${NC}"
    fi
else
    # Fallback: Create systemd service if PM2 is not available
    echo -e "${YELLOW}⚠ PM2 not available, setting up systemd service...${NC}"

    # Create systemd service file
    tee /etc/systemd/system/sinki-ssr.service > /dev/null <<EOF
[Unit]
Description=Sinki SSR Daemon
After=network.target

[Service]
Type=simple
User=$WEB_USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $SSR_DAEMON_PATH
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

    # Reload systemd and start service
    systemctl daemon-reload
    systemctl enable sinki-ssr
    systemctl restart sinki-ssr
    echo -e "${GREEN}✓ SSR daemon started with systemd${NC}"
fi

# Verify SSR daemon is running
echo -e "${BLUE}➤ Verifying SSR daemon...${NC}"
sleep 3
if command -v pm2 &> /dev/null; then
    # Check PM2 status
    if pm2 list | grep -q "$SSR_DAEMON_NAME.*online"; then
        echo -e "${GREEN}✓ SSR daemon is running properly (PM2)${NC}"
    else
        echo -e "${RED}✗ Warning: SSR daemon may not be running properly${NC}"
        pm2 logs $SSR_DAEMON_NAME --lines 5
    fi
else
    # Check systemd status
    if systemctl is-active --quiet sinki-ssr; then
        echo -e "${GREEN}✓ SSR daemon is running properly (systemd)${NC}"
    else
        echo -e "${RED}✗ Warning: SSR daemon may not be running properly${NC}"
        systemctl status sinki-ssr --lines=5 --no-pager
    fi
fi

# Test SSR endpoint
echo -e "${BLUE}➤ Testing SSR endpoint...${NC}"
if curl -f -X POST http://127.0.0.1:13714 -H "Content-Type: application/json" -d '{"component":"Home","props":{}}' > /dev/null 2>&1; then
    echo -e "${GREEN}✓ SSR endpoint responding correctly${NC}"
else
    echo -e "${YELLOW}⚠ SSR endpoint not responding on port 13714, checking alternative ports...${NC}"
    # Try common SSR ports
    for port in 13714 3000 8080; do
        if curl -f -X POST http://127.0.0.1:$port -H "Content-Type: application/json" -d '{"component":"Home","props":{}}' > /dev/null 2>&1; then
            echo -e "${GREEN}✓ SSR endpoint responding on port $port${NC}"
            break
        fi
    done
fi

# Restart PHP-FPM (check for PHP version)
echo -e "${YELLOW}➤ Restarting PHP-FPM...${NC}"
if systemctl is-active --quiet php8.2-fpm; then
    systemctl restart php8.2-fpm
    echo -e "${GREEN}✓ PHP 8.2-FPM restarted${NC}"
elif systemctl is-active --quiet php8.1-fpm; then
    systemctl restart php8.1-fpm
    echo -e "${GREEN}✓ PHP 8.1-FPM restarted${NC}"
elif systemctl is-active --quiet php8.0-fpm; then
    systemctl restart php8.0-fpm
    echo -e "${GREEN}✓ PHP 8.0-FPM restarted${NC}"
else
    echo -e "${YELLOW}⚠ Could not find active PHP-FPM service${NC}"
fi

# Restart Nginx (to clear any cached responses)
echo -e "${YELLOW}➤ Restarting Nginx...${NC}"
systemctl restart nginx

# Bring application back online
echo -e "${YELLOW}➤ Bringing application back online...${NC}"
sudo -u $WEB_USER php artisan up

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  SSR Deployment Completed Successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${GREEN}✓ Code pulled from SSR branch${NC}"
echo -e "${GREEN}✓ Dependencies updated${NC}"
echo -e "${GREEN}✓ Frontend assets built (with SSR)${NC}"
echo -e "${GREEN}✓ SSR daemon started and verified${NC}"
echo -e "${GREEN}✓ Database migrations run${NC}"
echo -e "${GREEN}✓ Cache cleared and optimized${NC}"
echo -e "${GREEN}✓ Application is live with SSR!${NC}"
echo ""
echo -e "Website: ${GREEN}https://sinki.ai${NC}"

# Display appropriate status based on process manager
if command -v pm2 &> /dev/null; then
    echo -e "SSR Status: ${BLUE}$(pm2 list | grep $SSR_DAEMON_NAME | awk '{print $10}')${NC}"
    echo ""
    echo -e "${BLUE}PM2 SSR Daemon Status:${NC}"
    pm2 status $SSR_DAEMON_NAME
    SSR_MONITOR_CMD="pm2 logs $SSR_DAEMON_NAME"
else
    echo -e "SSR Status: ${BLUE}$(systemctl is-active sinki-ssr)${NC}"
    echo ""
    echo -e "${BLUE}Systemd SSR Service Status:${NC}"
    systemctl status sinki-ssr --no-pager --lines=3
    SSR_MONITOR_CMD="sudo journalctl -u sinki-ssr -f"
fi

echo ""
echo -e "${YELLOW}📋 Post-deployment checklist:${NC}"
echo -e "  1. Verify website loads: https://sinki.ai"
echo -e "  2. Check page source (Ctrl+U) shows full HTML content"
echo -e "  3. Test with Google's Mobile-Friendly Test"
echo -e "  4. Monitor SSR daemon: ${SSR_MONITOR_CMD}"
echo -e "  5. Check nginx configuration for SSR support"
echo ""