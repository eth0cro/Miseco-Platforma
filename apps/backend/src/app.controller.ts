import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      service: 'miseco-backend',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
