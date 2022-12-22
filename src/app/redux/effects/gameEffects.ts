import { Injectable } from '@angular/core';
import { BalanceType, GiftResponseType } from '@app/models';
import { BackService } from '@app/services/back/back.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { isEqual } from 'lodash';
import { exhaustMap, map } from 'rxjs/operators';
import { addCredit, manageGameGift, saveGameGift, shoppingRound } from '../actions';
import { PlayerFacade } from '../facades/playerFacade';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly backService: BackService,
    private readonly playerFacade: PlayerFacade
  ) {}

  manageGameGift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(manageGameGift),
      exhaustMap((payload) => {
        const responseActions = []
        switch (payload.gift?.type) {
          case GiftResponseType.credit:
            if (isEqual(payload.gift?.balanceType, BalanceType.Add)) {
              responseActions.push(addCredit({credit: payload.gift?.balance}));
            }
            break;
  
          default:
            break;
        }
        responseActions.push(saveGameGift({gift: undefined}))
        return responseActions;
      })
    )
  );

  shoppingRound$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shoppingRound),
      map((payload) => {
        this.backService
          .shoppingRound(payload.dashboardAmount)
          .subscribe((response) => {
            if (response) {
              this.playerFacade.setPlayerStatusReady();
              this.playerFacade.setPlayerAmount(response.playerAmount);
            }
          })
          .unsubscribe();
      })
    ), {dispatch: false}
  );
}
