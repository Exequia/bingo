import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
  startLoadingActions,
  startProgressLoading,
  stopLoadingActions,
  stopProgressLoading,
} from '../actions';
import { AppState } from '../state';

@Injectable()
export class ConfigEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>
  ) {}

  startProgressLoading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(...startLoadingActions),
        map(() => this.store.dispatch(startProgressLoading()))
      ),
    { dispatch: false }
  );

  stopProgressLoading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(...stopLoadingActions),
        map(() => this.store.dispatch(stopProgressLoading()))
      ),
    { dispatch: false }
  );
}
