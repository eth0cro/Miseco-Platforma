import { Controller, Get } from '@nestjs/common';

@Controller('video')
export class VideoController {
  @Get('health')
  health() {
    return { module: 'video', status: 'ok' };
  }
}
