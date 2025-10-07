#!/bin/bash

# Laravel CI/CD Deployment Script for sinki.ai with SSR
# Author: Deployment Script with Inertia SSR Support
# Date: 2025-10-07

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/var/www/sinki.io"
BRANCH="main"  # Change this if you use a different branch
WEB_USER="www-data"
SSR_DAEMON_NAME="sinki-ssr"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Starting Deployment for sinki.ai${NC}"
echo -e "${GREEN}  🚀 With Inertia.js SSR Support${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check and install PM2 if not present
echo -e "${BLUE}➤ Checking PM2 installation...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠ PM2 not found. Installing PM2...${NC}"
    sudo npm install -g pm2
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
    sudo systemctl stop sinki-ssr || true
    echo -e "${GREEN}✓ SSR daemon stopped (systemd)${NC}"
else
    echo -e "${YELLOW}⚠ SSR daemon not running${NC}"
fi

# Pull latest code from GitHub
echo -e "${YELLOW}➤ Pulling latest code from GitHub (branch: $BRANCH)...${NC}"
sudo git fetch origin
sudo git reset --hard origin/$BRANCH
sudo git pull origin $BRANCH

# Set proper ownership
echo -e "${YELLOW}➤ Setting proper ownership...${NC}"
sudo chown -R $WEB_USER:$WEB_USER $PROJECT_DIR

# Install/Update Composer dependencies
echo -e "${YELLOW}➤ Installing/Updating Composer dependencies...${NC}"
sudo -u $WEB_USER composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Install/Update NPM dependencies
echo -e "${YELLOW}➤ Installing/Updating NPM dependencies...${NC}"
sudo npm install

# Build frontend assets WITH SSR
echo -e "${BLUE}➤ Building frontend assets with SSR bundle...${NC}"
sudo npm run build
echo -e "${GREEN}✓ Client and SSR bundles built successfully${NC}"

# Set proper ownership again after npm build
sudo chown -R $WEB_USER:$WEB_USER $PROJECT_DIR

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
sudo chmod -R 755 $PROJECT_DIR
sudo chmod -R 775 $PROJECT_DIR/storage
sudo chmod -R 775 $PROJECT_DIR/bootstrap/cache
sudo chmod -R 775 $PROJECT_DIR/bootstrap/ssr

# Make SSR daemon executable
sudo chmod +x $PROJECT_DIR/ssr-daemon.js

# Start/Restart SSR daemon
echo -e "${BLUE}➤ Starting SSR daemon...${NC}"
if command -v pm2 &> /dev/null; then
    # Use PM2 if available
    if pm2 list | grep -q $SSR_DAEMON_NAME; then
        pm2 restart $SSR_DAEMON_NAME
        echo -e "${GREEN}✓ SSR daemon restarted with PM2${NC}"
    else
        pm2 start $PROJECT_DIR/ssr-daemon.js --name $SSR_DAEMON_NAME
        pm2 save  # Save PM2 process list
        echo -e "${GREEN}✓ SSR daemon started with PM2${NC}"
    fi
else
    # Fallback: Create systemd service if PM2 is not available
    echo -e "${YELLOW}⚠ PM2 not available, setting up systemd service...${NC}"

    # Create systemd service file
    sudo tee /etc/systemd/system/sinki-ssr.service > /dev/null <<EOF
[Unit]
Description=Sinki SSR Daemon
After=network.target

[Service]
Type=simple
User=$WEB_USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $PROJECT_DIR/ssr-daemon.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

    # Reload systemd and start service
    sudo systemctl daemon-reload
    sudo systemctl enable sinki-ssr
    sudo systemctl restart sinki-ssr
    echo -e "${GREEN}✓ SSR daemon started with systemd${NC}"
fi

# Verify SSR daemon is running
echo -e "${BLUE}➤ Verifying SSR daemon...${NC}"
sleep 2
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
        sudo systemctl status sinki-ssr --lines=5 --no-pager
    fi
fi

# Test SSR endpoint
echo -e "${BLUE}➤ Testing SSR endpoint...${NC}"
if curl -f -X POST http://127.0.0.1:13714 -H "Content-Type: application/json" -d '{"component":"Home","props":{}}' > /dev/null 2>&1; then
    echo -e "${GREEN}✓ SSR endpoint responding correctly${NC}"
else
    echo -e "${RED}✗ Warning: SSR endpoint not responding${NC}"
fi

# Restart PHP-FPM (optional but recommended)
echo -e "${YELLOW}➤ Restarting PHP-FPM...${NC}"
sudo systemctl restart php8.2-fpm

# Restart Nginx (to clear any cached responses)
echo -e "${YELLOW}➤ Restarting Nginx...${NC}"
sudo systemctl restart nginx

# Bring application back online
echo -e "${YELLOW}➤ Bringing application back online...${NC}"
sudo -u $WEB_USER php artisan up

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Deployment Completed Successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${GREEN}✓ Code pulled from GitHub${NC}"
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
    sudo systemctl status sinki-ssr --no-pager --lines=3
    SSR_MONITOR_CMD="sudo journalctl -u sinki-ssr -f"
fi

echo ""
echo -e "${YELLOW}📋 Post-deployment checklist:${NC}"
echo -e "  1. Verify website loads: https://sinki.ai"
echo -e "  2. Check page source (Ctrl+U) shows full HTML content"
echo -e "  3. Test with Google's Mobile-Friendly Test"
echo -e "  4. Monitor SSR daemon: ${SSR_MONITOR_CMD}"
echo ""