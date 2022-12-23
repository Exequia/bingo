import { Injectable } from '@angular/core';
import { GAME_DASHBOARD_LIMIT_CELL } from '@app/config';
import {
  DashboardRowCellStatus,
  Dashboard,
  DashboardRow,
  DashboardRowCell,
  PlayerBase,
  PlayerResponse,
  DashboardRowStatus,
} from '@app/models';
import { first } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PlayerUtils {
  constructor() {}

  castPlayerResponse(player: PlayerResponse): PlayerBase {
    return <PlayerBase>{ ...player };
  }

  fillDashboards(dashboardsValues: number[][][]): Dashboard[] {
    //90 Bolas; numeros de 3*5
    return <Dashboard[]>dashboardsValues.map((dashboard) => {
      return <Dashboard>{
        rows: dashboard.map((row) => {
          row = row.sort((a, b) => a - b);
          const cells: DashboardRowCell[] = [];
          let rowValue: number[];
          for (let index = 0; index < GAME_DASHBOARD_LIMIT_CELL; index++) {
            rowValue = row.filter(
              (rowValue) => index * 10 < rowValue && rowValue < (index + 1) * 10
            );
            cells.push(this.getNewCell(rowValue));
          }
          return <DashboardRow>{
            cells,
            status: DashboardRowStatus.standard,
          };
        }),
      };
    });
  }

  private getNewCell(rowValue: number[]) {
    if (rowValue.length > 1) {
      console.warn('getNewCell: esto no debería pasar', rowValue);
    }
    const value: number | undefined = first(rowValue);
    return <DashboardRowCell>{
      value: !!value ? value : undefined,
      status: !!value
        ? DashboardRowCellStatus.waiting
        : DashboardRowCellStatus.empty,
    };
  }
}
