import { Body, Controller, Get, Post } from '@nestjs/common';
import { SettlementInputDto, SettlementType } from './dto/settlement-input.dto';

@Controller('settlements')
export class SettlementsController {
  private readonly store: SettlementInputDto[] = [];

  @Get('health')
  health() {
    return { module: 'settlements', status: 'ok' };
  }

  @Post('submit')
  submit(@Body() payload: SettlementInputDto) {
    this.store.push(payload);
    return {
      accepted: true,
      reviewRequired: true,
      finalReportEligible: payload.type === SettlementType.FINAL,
      archived: payload.type === SettlementType.INTERIM,
    };
  }

  @Get('final-report-preview')
  finalReportPreview() {
    const finalEntries = this.store.filter((x) => x.type === SettlementType.FINAL);
    const total = finalEntries.reduce(
      (acc, item) => acc + item.cashierTotal + item.zastrapayTotal + item.terminalTotal,
      0,
    );

    return { count: finalEntries.length, total };
  }
}
