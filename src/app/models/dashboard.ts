export interface Dashboard {
  rows: DashboardRow[];
  status?: string;
}

export interface DashboardRow {
  cells: DashboardRowCell[];
  status: DashboardRowStatus;
}

export enum DashboardRowStatus {
  standard = "standard",
  close = "close",
  almost = "almost",
  completed = "completed",
}

export interface DashboardRowCell {
  value: number | undefined;
  status: DashboardRowCellStatus;
  action?: DashboardRowCellActions;
}

export enum DashboardRowCellStatus {
  empty = "empty",
  waiting = 'waiting',
  checked = 'checked',
}

export enum DashboardRowCellActions {
  hide = 'hide',
  enter = 'enter',
  show = 'show',
  set = 'set',
  completed = 'completed',
}

export interface RoundDashboardResponse {
  lines: RoundDashboardLinesResponse[],
  status?: string
}

export interface RoundDashboardLinesResponse {
  values: number[],
  status?: string
}
