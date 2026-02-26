import { IsEnum, IsNumber, IsString } from 'class-validator';

export enum SettlementType {
  FINAL = 'FINAL',
  INTERIM = 'INTERIM',
}

export class SettlementInputDto {
  @IsString()
  branchId!: string;

  @IsString()
  period!: string;

  @IsEnum(SettlementType)
  type!: SettlementType;

  @IsNumber()
  cashierTotal!: number;

  @IsNumber()
  zastrapayTotal!: number;

  @IsNumber()
  terminalTotal!: number;
}
