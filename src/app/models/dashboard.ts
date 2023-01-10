export interface Dashboard {
  rows: DashboardRow[];
  status?: string;
}

export interface DashboardRow {
  cells: DashboardRowCell[];
  status: DashboardRowStatus;
}

export enum DashboardRowStatus {
  standard,
  close,
  almost,
  completed,
}

export interface DashboardRowCell {
  value: number | undefined;
  status: DashboardRowCellStatus;
}

export enum DashboardRowCellStatus {
  empty = "empty",
  waiting = 'waiting',
  checked = 'checked',
}

export interface RoundDashboardResponse {
  lines: RoundDashboardLinesResponse[],
  status?: string
}

export interface RoundDashboardLinesResponse {
  values: number[],
  status?: string
}
