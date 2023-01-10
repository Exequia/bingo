import { Component, Input } from '@angular/core';
import { DashboardRow } from '@app/models';

@Component({
  selector: 'app-dashboard-row',
  templateUrl: './dashboard-row.component.html',
  styleUrls: ['./dashboard-row.component.scss']
})
export class DashboardRowComponent {
  @Input() row: DashboardRow | undefined;

}
