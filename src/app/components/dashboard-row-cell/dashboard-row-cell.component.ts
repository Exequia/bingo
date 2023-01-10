import { Component, Input } from '@angular/core';
import { DashboardRowCell } from '@app/models';

@Component({
  selector: 'app-dashboard-row-cell',
  templateUrl: './dashboard-row-cell.component.html',
  styleUrls: ['./dashboard-row-cell.component.scss']
})
export class DashboardRowCellComponent {
  @Input() cell: DashboardRowCell | undefined;

}
