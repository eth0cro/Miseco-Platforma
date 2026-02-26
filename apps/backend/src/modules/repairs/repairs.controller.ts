import { Controller, Get } from '@nestjs/common';

@Controller('repairs')
export class RepairsController {
  @Get('health')
  health() {
    return { module: 'repairs', status: 'ok' };
  }
}
