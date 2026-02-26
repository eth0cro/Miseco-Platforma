# Deployment (Ubuntu Server, Docker Compose)

## Prerequisites

- Ubuntu 22.04+
- Docker + Docker Compose plugin
- DNS pointed to server
- `/srv/miseco/storage` on SSD volume

## Steps

1. Clone repository into `/opt/miseco`.
2. Configure secrets in `.env` (`POSTGRES_PASSWORD`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`).
   - You can start from template: `cp .env.example .env`.
3. Create storage path:
   - `sudo mkdir -p /srv/miseco/storage/{shared,workers,branches}`
4. Start stack:
   - `docker compose up -d --build`
5. Run Prisma migrations and seed admin.
6. Issue Let's Encrypt certificate and mount into `infra/nginx/certs`.
7. Restart nginx service container.

### If ports 80/443 are already in use

- Either stop the service that already binds those ports (e.g. host nginx/apache), or
- Change compose host ports in `.env`:
  - `NGINX_HTTP_PORT=8080`
  - `NGINX_HTTPS_PORT=8443`

## Health checks

- Frontend: `GET /api/health`
- Backend: `GET /api/health`

## Backup and restore

- Daily backup cron:
  - `0 2 * * * /opt/miseco/infra/scripts/backup.sh`
- Restore:
  - `/opt/miseco/infra/scripts/restore.sh <db_dump.sql.gz> <optional_storage_snapshot>`

Retention is configured for 30 days in backup scripts.
