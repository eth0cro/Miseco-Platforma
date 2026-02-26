# Miseco Platforma

Production-oriented monorepo scaffold for **MISECO Sports LBS GmbH**:

- Public website (HR default + EN/DE)
- Intranet with RBAC (Radnik, Moderator, Admin)
- Settlement module (FINAL + INTERIM)
- Scheduler, Storage ACL, Chat, Repairs, Video gateway stub
- NestJS + Prisma + PostgreSQL backend
- Next.js App Router frontend
- Docker Compose + Nginx + TLS + backup/restore scripts

## Monorepo layout

- `apps/backend` — NestJS API
- `apps/frontend` — Next.js web app
- `prisma` — database schema
- `infra` — docker, nginx, backup, systemd samples
- `docs` — architecture and operational docs

## Quick start (dev)

1. Copy env files:
   - `cp apps/backend/.env.example apps/backend/.env`
   - `cp apps/frontend/.env.example apps/frontend/.env.local`
2. Start dependencies: `docker compose up -d postgres redis`
3. Install deps in each app and run migrations.
4. Start backend and frontend.

## Production

Use `docker-compose.yml` + `infra/nginx/default.conf` and follow `docs/deployment.md`.
