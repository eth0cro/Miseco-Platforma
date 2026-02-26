#!/usr/bin/env bash
set -euo pipefail

BACKUP_ROOT="/srv/miseco/backups"
DB_DIR="$BACKUP_ROOT/db"
STORAGE_DIR="$BACKUP_ROOT/storage"
RETENTION_DAYS=30
DATE_TAG="$(date +%F_%H-%M-%S)"

mkdir -p "$DB_DIR" "$STORAGE_DIR"

# Database dump
if docker compose ps postgres >/dev/null 2>&1; then
  docker compose exec -T postgres pg_dump -U miseco -d miseco | gzip > "$DB_DIR/miseco_${DATE_TAG}.sql.gz"
else
  pg_dump "$DATABASE_URL" | gzip > "$DB_DIR/miseco_${DATE_TAG}.sql.gz"
fi

# Incremental-like rsync snapshots for storage
rsync -a --delete --link-dest="$STORAGE_DIR/latest" /srv/miseco/storage/ "$STORAGE_DIR/$DATE_TAG/"
rm -f "$STORAGE_DIR/latest"
ln -s "$STORAGE_DIR/$DATE_TAG" "$STORAGE_DIR/latest"

# Retention cleanup
find "$DB_DIR" -type f -mtime +$RETENTION_DAYS -delete
find "$STORAGE_DIR" -maxdepth 1 -mindepth 1 -type d -mtime +$RETENTION_DAYS -exec rm -rf {} +

echo "Backup completed: $DATE_TAG"
