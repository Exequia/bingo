import { Component } from '@angular/core';
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
}
