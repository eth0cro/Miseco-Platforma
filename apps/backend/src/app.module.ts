import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BranchesModule } from './modules/branches/branches.module';
import { SettlementsModule } from './modules/settlements/settlements.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { StorageModule } from './modules/storage/storage.module';
import { ChatModule } from './modules/chat/chat.module';
import { VideoModule } from './modules/video/video.module';
import { RepairsModule } from './modules/repairs/repairs.module';
import { AuditModule } from './modules/audit/audit.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BranchesModule,
    SettlementsModule,
    SchedulerModule,
    StorageModule,
    ChatModule,
    VideoModule,
    RepairsModule,
    AuditModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
