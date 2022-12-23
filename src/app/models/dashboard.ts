export interface Dashboard {
  rows: DashboardRow[];
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
  empty,
  waiting,
  checked,
}
