import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Connected to PostgreSQL');
    } catch (error) {
      this.logger.error(
        'Database connection failed during bootstrap. Service will stay up, but DB-backed operations will fail until DATABASE_URL/DB are fixed.',
        error instanceof Error ? error.stack : String(error),
      );
    }
  }
}
