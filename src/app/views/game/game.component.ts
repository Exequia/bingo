import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {
  slideChildAnimation,
  slideInAnimation,
} from '@app/animations/router.animations';
import { GamePlayerFacade } from '@app/redux/facades/gamePlayersFacade';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [slideChildAnimation],
})
export class GameComponent {
  gamePlayers$ = this.gamePlayerFacade.gamePlayers$;

  constructor(
    private readonly contexts: ChildrenOutletContexts,
    private readonly gamePlayerFacade: GamePlayerFacade
  ) {
    this.gamePlayerFacade.loadGamePlayers();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
