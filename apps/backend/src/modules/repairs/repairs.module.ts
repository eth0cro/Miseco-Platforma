import { Module } from '@nestjs/common';
import { RepairsController } from './repairs.controller';

@Module({
  controllers: [RepairsController],
})
export class RepairsModule {}
