# Miseco Sports LBS Architecture

## High-level

- **Frontend**: Next.js App Router, TypeScript, dark corporate UI with red accents.
- **Backend**: NestJS API, JWT auth, RBAC guard, audit-ready modules.
- **Database**: PostgreSQL with Prisma schema and role-based data model.
- **Realtime**: Planned Socket.IO channel for chat/presence.
- **Storage**: `/srv/miseco/storage` mounted into backend container.
- **Reverse proxy**: Nginx TLS termination and routing.

## Modules

- Public site: Home, O nama, Poslovnice, Jobs, News, Contact, Login.
- Intranet: settlements, scheduler, storage, chat, repairs, video.
- Roles: RADNIK, MODERATOR, ADMIN.

## Settlement logic

- `FINAL`: included in final reporting and branch comparison.
- `INTERIM`: archived snapshot, resets active state, not part of final comparison.

## i18n

- Default language: `hr`.
- Additional languages: `en`, `de`.
- Frontend translation dictionaries in `apps/frontend/i18n/messages`.
- Backend message dictionaries in `apps/backend/src/common/i18n/messages`.

## Security foundations

- bcrypt password hashing.
- JWT access + refresh token strategy.
- RBAC guard + role decorator.
- Validation pipe, CORS configuration.
- Audit log model for sensitive actions.
