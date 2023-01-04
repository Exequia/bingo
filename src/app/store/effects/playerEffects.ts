import { Injectable } from '@angular/core';
import { BalanceType, GamePlayer, GamePlayerStatus, GiftResponseType } from '@app/models';
import { PlayerService } from '@app/services/player/player.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { changePlayerStatus, createNewGamePlayer, createNewGamePlayerSuccess, playerShopping, saveGameGift, saveLocalPlayer, shoppingRound } from '../actions';
import { clone, isEqual } from 'lodash';
import { PlayerUtils } from '@app/utils/player/player-utils.service';
import { RouterFacade } from '../facades/routerFacade';
import { addGamePlayer } from '../entities/game-player.actions';

@Injectable()
export class PlayerEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly playerUtils: PlayerUtils,
    private readonly playerService: PlayerService,
    private readonly routerFacade: RouterFacade
  ) {}

  createNewGamePlayer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createNewGamePlayer),
        map(payload => this.playerService.createNewGamePlayer(payload.name))
      ),
    { dispatch: false }
  );

  createNewGamePlayerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewGamePlayerSuccess),
      exhaustMap(payload => {
        const { playerResponse } = payload;
        const { player } = payload.playerResponse;
        let amount = clone(player.amount) || 0;
        if (player.amount && playerResponse.gift && isEqual(playerResponse.gift?.type, GiftResponseType.credit)) {
          amount = isEqual(playerResponse.gift?.balanceType, BalanceType.Add) ? amount - playerResponse.gift?.balance : amount + playerResponse.gift?.balance;
        }
        this.routerFacade.navigateTo();
        const gamePlayer: GamePlayer = this.playerUtils.createGamePlayerFromPlayer(player);
        return [
          saveLocalPlayer({
            player: this.playerUtils.castPlayerResponse({ ...player, amount })
          }),
          addGamePlayer({ gamePlayer }),
          saveGameGift({ gift: playerResponse.gift })
        ];
      }),
      catchError(() => EMPTY)
    )
  );

  playerShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerShopping),
      exhaustMap(payload => [changePlayerStatus({ playerStatus: GamePlayerStatus.shopping }), shoppingRound({ dashboardAmount: payload.dashboardAmount })])
    )
  );
}
