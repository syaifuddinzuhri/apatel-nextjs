import { PaginationParams } from "./common";

export interface UnitDatesInput {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export interface UnitParams extends PaginationParams {
  guest?: number;
  is_featured?: number;
  check_in?: string;
  check_out?: string;
  region?: string;
}
