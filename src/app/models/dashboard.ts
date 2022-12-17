export interface dashboard {
    rows: dashboardRow[]
}

export interface dashboardRow {
    cells: dashboardRowCell[],
    status:rowStatus
}

export enum rowStatus {
    close,
    almost,
    completed
}

export interface dashboardRowCell {
    value: number,
    status: cellStatus
}

export enum cellStatus {
    empty,
    waiting,
    checked
}