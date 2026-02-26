import { Controller, Get } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @Get('health')
  health() {
    return { module: 'chat', status: 'ok' };
  }
}
