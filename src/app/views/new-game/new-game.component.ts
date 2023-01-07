import { Component } from '@angular/core';
import { GameConfig } from '@app/models';
import { GameFacade } from '@app/store/facades/gameFacade';
import { PlayerFacade } from '@app/store/facades/playerFacade';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent {
  gameConfig$ = this.gameFacade.gameConfig$;
  localPlayer$ = this.playerFace.player$;

  constructor(private readonly gameFacade: GameFacade, private readonly playerFace: PlayerFacade) {}

  startGame(gameConfig: GameConfig) {
    // this.gameFacade.setGameStatusShopping();
    this.gameFacade.initGameConfig(gameConfig);
  }
}
