import { Injectable } from '@angular/core';
import { map } from 'lodash';
import { Dashboard, DashboardRow, DashboardRowCell, DashboardRowCellStatus, DashboardRowStatus, RoundDashboardResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  getEnumNumberValues(enumData: Object): number[] {
    return Object.keys(enumData || [])
      .map(v => Number(v))
      .filter(num => !isNaN(num));
  }

  getEnumValues(enumData: Object): string[] {
    return Object.keys(enumData || []).map(v => v.toUpperCase());
  }

  castshoppingResponseToDashboards(dashboardsResponse: RoundDashboardResponse[]): Dashboard[] {
    const response: Dashboard[] = map(dashboardsResponse, dashboard => {
      const das: Dashboard = {
        status: dashboard?.status,
        rows: map(dashboard?.lines, line => {
          const row: DashboardRow = { cells: [], status: DashboardRowStatus.standard };
          for (let index = 0; index < 9; index++) {
            const value = line.values.filter(value => index * 10 <= value && value < (index + 1) * 10)[0];
            const cell: DashboardRowCell = {
              value,
              status: value ? DashboardRowCellStatus.waiting : DashboardRowCellStatus.empty
            };
            row.cells.push(cell);
          }
          return row;
        })
      };
      return das;
    });
    return response;
  }
}
