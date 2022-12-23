import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { childAnimation, slideChildAnimation, slideInAnimation } from '@app/animations/router.animations';
import { GameFacade } from '@app/redux/facades/gameFacade';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [childAnimation],
})
export class GameComponent {
  gamePlayers$ = this.gameFacade.gamePlayers$;

  constructor(
    private readonly contexts: ChildrenOutletContexts,
    private readonly gameFacade: GameFacade
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
