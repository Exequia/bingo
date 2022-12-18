import { Component, Input } from '@angular/core';
import { GamePlayer } from '@app/models';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss'],
})
export class PlayerSummaryComponent {
  @Input() gamePlayer: GamePlayer | undefined | null = undefined;
}
