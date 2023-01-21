import { Component } from '@angular/core';
import { GameFacade } from '@app/store/facades/gameFacade';

@Component({
  selector: 'app-round-values',
  templateUrl: './round-values.component.html',
  styleUrls: ['./round-values.component.scss']
})
export class RoundValuesComponent {
  gameStatus$ = this.gameFacade.gameStatus$;

  constructor(private readonly gameFacade: GameFacade) {}
}
