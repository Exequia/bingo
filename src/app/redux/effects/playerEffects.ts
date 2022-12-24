import { Injectable } from '@angular/core';
import { BalanceType, GamePlayerStatus, GiftResponseType } from '@app/models';
import { BackService } from '@app/services/back/back.service';
import { PlayerService } from '@app/services/player/player.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  changePlayerStatus,
  createNewGamePlayer,
  playerShopping,
  saveGameGift,
  saveLocalPlayer,
  shoppingRound,
} from '../actions';
import { isEqual } from 'lodash';
import { PlayerUtils } from '@app/utils/player/player-utils.service';

@Injectable()
export class PlayerEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly playerUtils: PlayerUtils,
    private readonly backService: BackService
  ) {}

  createNewGamePlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewGamePlayer),
      exhaustMap((payload) =>
        this.backService.createNewGamePlayer(payload.name).pipe(
          mergeMap((playerResponse) => {
            const player = playerResponse.player;
            if (
              player.amount &&
              playerResponse.gift &&
              isEqual(playerResponse.gift?.type, GiftResponseType.credit)
            ) {
              player.amount = isEqual(
                playerResponse.gift?.balanceType,
                BalanceType.Add
              )
                ? player.amount - playerResponse.gift?.balance
                : player.amount + playerResponse.gift?.balance;
            }
            return [
              saveLocalPlayer({
                player: this.playerUtils.castPlayerResponse(
                  playerResponse.player
                ),
              }),
              saveGameGift({ gift: playerResponse.gift }),
            ];
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  playerShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerShopping),
      exhaustMap((payload) => [
        changePlayerStatus({ playerStatus: GamePlayerStatus.shopping }),
        shoppingRound({ dashboardAmount: payload.dashboardAmount }),
      ])
    )
  );
}
