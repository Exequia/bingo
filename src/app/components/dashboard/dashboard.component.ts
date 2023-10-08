import { Component, Input } from '@angular/core';
import { Dashboard } from '@app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() dashboard: Dashboard | undefined;
}
