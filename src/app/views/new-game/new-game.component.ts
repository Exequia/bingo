import { Component } from '@angular/core';
import { GameConfig } from '@app/models';
import { GameFacade } from '@app/redux/facades/gameFacade';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent {
  gameConfig$ = this.gameFacade.gameConfig$;
  gamePlayers$ = this.gameFacade.gamePlayers$;

  constructor(private readonly gameFacade: GameFacade) {}

  handelGameConfig(gameConfig: GameConfig) {
    console.log('TODO: iniciar la partida', gameConfig);
  }
}
