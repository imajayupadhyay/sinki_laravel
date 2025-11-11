#!/bin/bash

# Database Backup Script
# This script connects to a remote MySQL database and creates a backup locally

# Configuration - Update these variables with your server details
REMOTE_HOST="your_server_ip_or_domain"
REMOTE_USER="your_ssh_username"
DB_NAME="your_database_name"
DB_USER="your_mysql_username"
DB_PASSWORD="your_mysql_password"

# Local backup configuration
BACKUP_DIR="./database_backups"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${DB_NAME}_backup_${DATE}.sql"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting database backup...${NC}"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to check if command was successful
check_status() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ $1${NC}"
    else
        echo -e "${RED}✗ $1 failed${NC}"
        exit 1
    fi
}

# Test SSH connection
echo "Testing SSH connection to $REMOTE_HOST..."
ssh -o ConnectTimeout=10 "$REMOTE_USER@$REMOTE_HOST" "echo 'SSH connection successful'" 2>/dev/null
check_status "SSH connection test"

# Create database dump on remote server and transfer to local
echo "Creating database backup..."
ssh "$REMOTE_USER@$REMOTE_HOST" "mysqldump -u '$DB_USER' -p'$DB_PASSWORD' '$DB_NAME' --routines --triggers --single-transaction" > "$BACKUP_DIR/$BACKUP_FILE"
check_status "Database backup creation"

# Check if backup file was created and has content
if [ -s "$BACKUP_DIR/$BACKUP_FILE" ]; then
    FILESIZE=$(stat -f%z "$BACKUP_DIR/$BACKUP_FILE" 2>/dev/null || stat -c%s "$BACKUP_DIR/$BACKUP_FILE")
    echo -e "${GREEN}✓ Backup completed successfully!${NC}"
    echo -e "Backup file: ${YELLOW}$BACKUP_DIR/$BACKUP_FILE${NC}"
    echo -e "File size: ${YELLOW}$(echo $FILESIZE | numfmt --to=iec)${NC}"

    # Optionally compress the backup
    echo "Compressing backup..."
    gzip "$BACKUP_DIR/$BACKUP_FILE"
    check_status "Backup compression"
    echo -e "Compressed file: ${YELLOW}$BACKUP_DIR/$BACKUP_FILE.gz${NC}"
else
    echo -e "${RED}✗ Backup file is empty or was not created${NC}"
    exit 1
fi

# Clean up old backups (keep last 7 days)
echo "Cleaning up old backups (keeping last 7 days)..."
find "$BACKUP_DIR" -name "${DB_NAME}_backup_*.sql.gz" -mtime +7 -delete
check_status "Old backup cleanup"

echo -e "${GREEN}Database backup process completed!${NC}"