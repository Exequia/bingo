import { Component } from '@angular/core';
import { PlayerFacade } from './redux/facades/playerFacade';
import { ConfigFacade } from './redux/facades/configFacade';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  progress$ = this.configFacade.progress$;
  player$ = this.playerFacade.player$;

  constructor(
    private readonly configFacade: ConfigFacade,
    private readonly playerFacade: PlayerFacade,
    private readonly contexts: ChildrenOutletContexts
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
