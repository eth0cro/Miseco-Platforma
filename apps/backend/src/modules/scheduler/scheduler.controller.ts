import { Controller, Get } from '@nestjs/common';

@Controller('scheduler')
export class SchedulerController {
  @Get('health')
  health() {
    return { module: 'scheduler', status: 'ok' };
  }
}
