import { Injectable } from '@angular/core';
import { URL_GAME, URL_SHOPPING } from '@app/config';
import { BalanceType, GameStatus, GiftResponseType } from '@app/models';
import { BackService } from '@app/services/back/back.service';
import { GameService } from '@app/services/game/game.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { isEqual } from 'lodash';
import { exhaustMap, map } from 'rxjs/operators';
import {
  addCredit,
  initConfigurationGame,
  initGameConfigSuccess,
  manageGameGift,
  saveGameGift,
  setGameConfig,
  setGameStatus,
  setGameStatusInit,
  setGameStatusShopping,
  setPlayerOwner,
  shoppingRound
} from '../actions';
import { PlayerFacade } from '../facades/playerFacade';
import { RouterFacade } from '../facades/routerFacade';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly backService: BackService,
    private readonly playerFacade: PlayerFacade,
    private readonly gameService: GameService,
    private readonly routerFacade: RouterFacade
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

  setGameStatusInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setGameStatusInit),
      map(() => {
        this.gameService.setGameStatusInit();
        return setPlayerOwner();
      })
    )
  );

  initConfigurationGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(initConfigurationGame),
        map(payload => {
          this.gameService.initConfigurationGame(payload.gameConfig);
        })
      ),
    { dispatch: false }
  );

  initGameConfigSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initGameConfigSuccess),
      exhaustMap(payload => [setGameConfig({ gameConfig: payload?.gameConfig }), setGameStatusShopping()])
    )
  );

  setGameStatusShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setGameStatusShopping),
      map(() => {
        setTimeout(() => {
          this.routerFacade.navigateTo(`/${URL_GAME}/${URL_SHOPPING}`);
        }, 100);
        return setGameStatus({ gameStatus: GameStatus.shopping });
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
