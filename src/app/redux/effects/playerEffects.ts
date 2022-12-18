import { Injectable } from '@angular/core';
import { PlayerService } from '@app/services/player/player.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { setPlayerName, SET_PLAYER_NAME } from '../actions';

@Injectable()
export class MovieEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly playerService: PlayerService
  ) {}

//   setPlayerName$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(setPlayerName),
//       exhaustMap((action) =>
//         this.playerService.setPlayerName(action.name).pipe(
//           map((movies) => EMPTY
//         //    ({
//         //     type: '[Movies API] Movies Loaded Success',
//         //     payload: movies,
//         //   })),
//           ,catchError(() => EMPTY)
//         )
//       )
//     )
//   );
}
