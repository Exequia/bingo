import { Injectable } from '@angular/core';
import { BalanceType, GiftResponseType } from '@app/models';
import { BackService } from '@app/services/back/back.service';
import { GameService } from '@app/services/game/game.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { isEqual } from 'lodash';
import { exhaustMap, map } from 'rxjs/operators';
import { addCredit, manageGameGift, saveGameGift, setGameStatusInit, setPlayerOwner, shoppingRound } from '../actions';
import { GameFacade } from '../facades/gameFacade';
import { PlayerFacade } from '../facades/playerFacade';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly backService: BackService,
    private readonly playerFacade: PlayerFacade,
    private readonly gameService: GameService
  ) {}

  manageGameGift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(manageGameGift),
      exhaustMap(payload => {
        const responseActions = [];
        switch (payload.gift?.type) {
          case GiftResponseType.credit:
            if (isEqual(payload.gift?.balanceType, BalanceType.Add)) {
              responseActions.push(addCredit({ credit: payload.gift?.balance }));
            }
            break;

          default:
            break;
        }
        responseActions.push(saveGameGift({ gift: undefined }));
        return responseActions;
      })
    )
  );

  setGameStatusInit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setGameStatusInit),
        map(() => {
          this.gameService.setGameStatusInit();
          return setPlayerOwner();
        })
      )
  );

  shoppingRound$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(shoppingRound),
        map(payload => {
          this.backService
            .shoppingRound(payload.dashboardAmount)
            .subscribe(response => {
              if (response) {
                this.playerFacade.setPlayerStatusReady();
                this.playerFacade.setPlayerAmount(response.playerAmount);
                this.playerFacade.setPlayerDashboard(response.dashboardsValues);
              }
            })
            .unsubscribe();
        })
      ),
    { dispatch: false }
  );
}
