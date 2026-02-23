#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <db_dump.sql.gz> [storage_snapshot_dir]"
  exit 1
fi

DB_DUMP="$1"
STORAGE_SNAPSHOT="${2:-}"

zcat "$DB_DUMP" | docker compose exec -T postgres psql -U miseco -d miseco

if [[ -n "$STORAGE_SNAPSHOT" ]]; then
  rsync -a --delete "$STORAGE_SNAPSHOT/" /srv/miseco/storage/
fi

echo "Restore completed"
