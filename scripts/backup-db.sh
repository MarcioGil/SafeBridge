#!/bin/bash
# Backup automático do banco SQLite
DB_PATH="$(dirname "$0")/../dev.db"
BACKUP_PATH="$(dirname "$0")/../backups/dev-$(date +%Y%m%d-%H%M%S).db"
mkdir -p $(dirname "$BACKUP_PATH")
cp "$DB_PATH" "$BACKUP_PATH"
echo "Backup salvo em $BACKUP_PATH"
