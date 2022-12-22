export interface Dashboard {
    rows: DashboardRow[]
}

export interface DashboardRow {
    cells: DashboardRowCell[],
    status:rowStatus
}

export enum rowStatus {
    standard,
    close,
    almost,
    completed
}

export interface DashboardRowCell {
    value: number,
    status: cellStatus
}

export enum cellStatus {
    empty,
    waiting,
    checked
}