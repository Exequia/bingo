import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { URL_BINGO, URL_GAME, URL_HOME, URL_READY, URL_SHOPPING } from '@app/config/routerConstants';
import { GameStatusEnum } from '@app/models';
import { GameFacade } from '@app/store/facades/gameFacade';
import { RouterFacade } from '@app/store/facades/routerFacade';
import { map, Observable, withLatestFrom } from 'rxjs';
import { get } from 'lodash';
import { PlayerFacade } from '@app/store/facades/playerFacade';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  gameStatus$ = this.gameFacade.gameStatus$;
  player$ = this.playerFacade.player$;

  constructor(private readonly gameFacade: GameFacade, private readonly routerFacade: RouterFacade, private readonly playerFacade: PlayerFacade) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentTarget = get(route, 'routeConfig.path');
    return this.gameStatus$.pipe(
      withLatestFrom(this.player$),
      map(([gameStatus, player]) => {
        // if (!player.owner) {
        switch (gameStatus.status) {
          case GameStatusEnum.initialized:
            return currentTarget === URL_GAME;
          // if (currentTarget !== URL_GAME) {
          // this.routerFacade.navigateTo(URL_GAME);
          // }
          // break;
          case GameStatusEnum.shopping:
            return [URL_SHOPPING, URL_READY].includes(currentTarget || '');
          // if (currentTarget !== URL_SHOPPING) {
          //   this.routerFacade.navigateTo(URL_SHOPPING);
          // }
          // break;
          case GameStatusEnum.started:
            return currentTarget === URL_BINGO;
          default:
            return currentTarget === URL_HOME;
          // if (currentTarget !== URL_HOME) {
          //   this.routerFacade.navigateTo(URL_HOME);
          // }
          // break;
        }
        // }
        return false;
      })
    );
  }
}
