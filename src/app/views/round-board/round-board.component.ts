import { Component } from '@angular/core';
import { GameFacade } from '@app/store/facades/gameFacade';

@Component({
  selector: 'app-round-board',
  templateUrl: './round-board.component.html',
  styleUrls: ['./round-board.component.scss']
})
export class RoundBoardComponent {
  roundDashboards$ = this.gameFacade.roundDashboards$;

  constructor(private readonly gameFacade: GameFacade) {}

}
