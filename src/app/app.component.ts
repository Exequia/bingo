import { Component } from '@angular/core';
import { selectPlayerFeature, selectProgressConfig } from './redux';
import { Store } from '@ngrx/store';
import { AppState } from './redux';
import { PlayerFacade } from './redux/facades/playerFacade';
import { ConfigFacade } from './redux/facades/configFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  progress$ = this.configFacade.progress$;
  player$ = this.playerFacade.player$;

  constructor(private readonly configFacade: ConfigFacade, private readonly playerFacade: PlayerFacade) {}
}
