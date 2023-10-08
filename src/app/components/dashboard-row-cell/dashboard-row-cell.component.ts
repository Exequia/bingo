import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DashboardRowCell } from '@app/models';

@Component({
  selector: 'app-dashboard-row-cell',
  templateUrl: './dashboard-row-cell.component.html',
  styleUrls: ['./dashboard-row-cell.component.scss'],
  animations: [
    trigger('cellAnimation', [
      // state(DashboardRowCellStatus.waiting, style({ transform: 'scale(5)', 'z-index': 30, opacity: 0, color: '#ffdc9d' })),
      // state(DashboardRowCellStatus.match, style({ transform: 'scale(5)', 'z-index': 30, opacity: 0, color: '#ffdc9d' })),
      // state(DashboardRowCellStatus.checked, style({ transform: 'scale(5)', 'z-index': 20 })),
      // transition(`${DashboardRowCellStatus.waiting} => ${DashboardRowCellStatus.match}`, animate('750ms ease-in')),
      // transition(`${DashboardRowCellStatus.match} => ${DashboardRowCellStatus.checked}`, animate('750ms ease-in'))
    ])
  ]
})
export class DashboardRowCellComponent {
  @Input() cell: DashboardRowCell | undefined;
}
