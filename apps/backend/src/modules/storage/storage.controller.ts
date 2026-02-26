import { Controller, Get } from '@nestjs/common';

@Controller('storage')
export class StorageController {
  @Get('health')
  health() {
    return { module: 'storage', status: 'ok' };
  }
}
