import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DashboardRow, DashboardRowCell, DashboardRowCellActions, DashboardRowCellStatus, DashboardRowStatus } from '@app/models';
import { find, isEqual } from 'lodash';

@Component({
  selector: 'app-round-summary',
  templateUrl: './round-summary.component.html',
  styleUrls: ['./round-summary.component.scss'],
  animations: [
    trigger('ballAnimation', [
      state(DashboardRowCellActions.hide, style({ transform: 'scale(5)', 'z-index': 30, opacity: 0, color: '#ffdc9d' })),
      state(DashboardRowCellActions.enter, style({ transform: 'scale(5)', 'z-index': 30, opacity: 0, color: '#ffdc9d' })),
      state(DashboardRowCellActions.show, style({ transform: 'scale(5)', 'z-index': 20 })),
      state(DashboardRowCellActions.set, style({ transform: 'scale(1)', 'z-index': 10 })),
      state(DashboardRowCellActions.completed, style({ transform: 'scale(1)', 'z-index': 0 })),
      transition(`${DashboardRowCellActions.hide} => ${DashboardRowCellActions.enter}`, animate('750ms ease-in')),
      transition(`${DashboardRowCellActions.enter} => ${DashboardRowCellActions.show}`, animate('750ms ease-in')),
      transition(`${DashboardRowCellActions.show} => ${DashboardRowCellActions.set}`, animate('1000ms ease-out')),
      transition(`${DashboardRowCellActions.set} => ${DashboardRowCellActions.completed}`, animate('0ms'))
    ])
  ]
})
export class RoundSummaryComponent {
  rowsNum: number = 9;
  colsNum: number = 10;
  rows: DashboardRow[] = [];
  values: number[] = [];

  constructor() {
    for (let rowIndex = 0; rowIndex < this.rowsNum; rowIndex++) {
      this.rows.push({
        status: DashboardRowStatus.standard,
        cells: Array.from(
          { length: this.colsNum },
          (_, i) =>
            <DashboardRowCell>{
              status: DashboardRowCellStatus.empty,
              value: rowIndex * 10 + i + 1,
              action: DashboardRowCellActions.hide
            }
        )
      });
    }
    this.initRandomValues();
  }

  initRandomValues() {
    const interval = setInterval(() => {
      if (this.values.length === 90) {
        clearInterval(interval);
      } else {
        this.addNewValue(this.getRandomValue());
      }
    }, 500);
  }

  getRandomValue(): number {
    let value;
    do {
      value = Math.floor(Math.random() * (this.rowsNum * 10)) + 1;
    } while (this.values.includes(value));
    return value;
  }

  addNewValue(newValue: number) {
    this.values.push(newValue);
    let match: DashboardRowCell | undefined;
    do {
      this.rows.forEach(row => {
        match = !match ? find(row.cells, cell => isEqual(cell.value, newValue)) : match;
      });
    } while (!match);
    match.status = DashboardRowCellStatus.checked;
    this.startAnimation(match);
  }

  startAnimation(newValue: DashboardRowCell) {
    newValue.action = DashboardRowCellActions.enter;
    setTimeout(() => {
      newValue.action = DashboardRowCellActions.show;
      setTimeout(() => {
        newValue.action = DashboardRowCellActions.set;
      }, 1500);
    }, 800);
  }
}
