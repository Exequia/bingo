import { Injectable } from '@angular/core';
import { GameService } from '@app/services/game/game.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../state';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly gameService: GameService
  ) {}

  // initConfigurationGame$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(...startLoadingActions),
  //       map(() => this.gameService.))
  //     )
  // );
}
