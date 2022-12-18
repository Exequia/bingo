import { Component } from '@angular/core';
import { PlayerFacade } from '@app/redux/facades/playerFacade';
import { RouterFacade } from '@app/redux/facades/routerFacade';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  constructor(private readonly playerFacade: PlayerFacade, private readonly routerFacade: RouterFacade) {}

  setName(playerName: string) {
    this.playerFacade.setPlayerName(playerName);
    this.routerFacade.navigateTo();
  }
}
