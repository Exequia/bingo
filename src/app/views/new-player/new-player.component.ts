import { Component } from '@angular/core';
import { PlayerFacade } from '@app/redux/facades/playerFacade';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  constructor(private readonly playerFacade: PlayerFacade) {}

  setName(playerName: string) {
    this.playerFacade.setPlayerName(playerName);
  }
}
