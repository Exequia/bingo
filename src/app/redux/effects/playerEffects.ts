import { Injectable } from '@angular/core';
// import { PlayerService } from '@app/services/player/player.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { createNewGamePlayer, saveLocalPlayer } from '../actions';
// import { AppState } from '../state';

@Injectable()
export class PlayerEffects {
  constructor(
    private readonly actions$: Actions,
    // private readonly store: Store<AppState>,
    // private readonly playerService: PlayerService
  ) {}

  createNewGamePlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewGamePlayer),
      map((payload) =>
        saveLocalPlayer({ player: { name: payload.name, id: payload.name } })
      )
    )
  );
}
