import { Component, Input } from '@angular/core';
import { GamePlayer, GamePlayerStatus } from '@app/models';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent {
  @Input() gamePlayer: GamePlayer | undefined | null = undefined;

  getIcon(): string {
    let icon = 'hourglass_bottom';
    switch (this.gamePlayer?.status) {
      case GamePlayerStatus.shopping:
        icon = 'shopping_cart';
        break;

      case GamePlayerStatus.ready:
        icon = 'price_check';
        break;
    }
    return icon;
  }
}
