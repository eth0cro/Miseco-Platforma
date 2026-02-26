import { Body, Controller, Get, Post } from '@nestjs/common';

export type SettlementType = 'FINAL' | 'INTERIM';

interface SettlementInput {
  branchId: string;
  period: string;
  type: SettlementType;
  cashierTotal: number;
  zastrapayTotal: number;
  terminalTotal: number;
}

@Controller('settlements')
export class SettlementsController {
  private readonly store: SettlementInput[] = [];

  @Get('health')
  health() {
    return { module: 'settlements', status: 'ok' };
  }

  @Post('submit')
  submit(@Body() payload: SettlementInput) {
    this.store.push(payload);
    return {
      accepted: true,
      reviewRequired: true,
      finalReportEligible: payload.type === 'FINAL',
      archived: payload.type === 'INTERIM',
    };
  }

  @Get('final-report-preview')
  finalReportPreview() {
    const finalEntries = this.store.filter((x) => x.type === 'FINAL');
    const total = finalEntries.reduce(
      (acc, item) => acc + item.cashierTotal + item.zastrapayTotal + item.terminalTotal,
      0,
    );

    return { count: finalEntries.length, total };
  }
}
