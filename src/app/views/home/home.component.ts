import { Component } from '@angular/core';
import { GameFacade } from '@app/store/facades/gameFacade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  gameStatus$ = this.gameFacade.gameStatus$;

  constructor(private readonly gameFacade: GameFacade) {}

  newGame() {
    this.gameFacade.setGameStatusInit();
  }
}
