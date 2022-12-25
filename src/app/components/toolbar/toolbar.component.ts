import { Component, Input } from '@angular/core';
import { PlayerState } from '@app/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() player: PlayerState | null = null;
}
