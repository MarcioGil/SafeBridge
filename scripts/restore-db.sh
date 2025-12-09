#!/bin/bash
# Script de restauração do banco SQLite a partir de um backup
# Uso: sh scripts/restore-db.sh caminho/para/backup.db

if [ -z "$1" ]; then
  echo "Uso: sh scripts/restore-db.sh caminho/para/backup.db"
  exit 1
fi

BACKUP_FILE="$1"
DB_PATH="$(dirname "$0")/../dev.db"

if [ ! -f "$BACKUP_FILE" ]; then
  echo "Arquivo de backup não encontrado: $BACKUP_FILE"
  exit 2
fi

cp "$BACKUP_FILE" "$DB_PATH"
echo "Banco restaurado a partir de $BACKUP_FILE para $DB_PATH"
