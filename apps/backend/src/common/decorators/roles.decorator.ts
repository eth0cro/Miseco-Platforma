import { SetMetadata } from '@nestjs/common';

export enum AppRole {
  RADNIK = 'RADNIK',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: AppRole[]) => SetMetadata(ROLES_KEY, roles);
