import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { URL_GAME, URL_HOME, URL_SHOPPING } from '@app/config/routerConstants';
import { GameStatus } from '@app/models';
import { GameFacade } from '@app/redux/facades/gameFacade';
import { RouterFacade } from '@app/redux/facades/routerFacade';
import { delay, map, Observable, take } from 'rxjs';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  gameStatus$ = this.gameFacade.gameStatus$;

  constructor(
    private readonly gameFacade: GameFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(route, state);
    const currentTarget = get(route, 'routeConfig.path');
    return this.gameStatus$.pipe(
      take(1),
      map((gameStatus) => {
        switch (gameStatus) {
          case GameStatus.initialized:
            return currentTarget === URL_GAME;
            // if (currentTarget !== URL_GAME) {
              // this.routerFacade.navigateTo(URL_GAME);
            // }
            // break;
          case GameStatus.shopping:
            return currentTarget === URL_SHOPPING;
            // if (currentTarget !== URL_SHOPPING) {
            //   this.routerFacade.navigateTo(URL_SHOPPING);
            // }
            // break;
          default:
            return currentTarget === URL_HOME;
            // if (currentTarget !== URL_HOME) {
            //   this.routerFacade.navigateTo(URL_HOME);
            // }
            // break;
        }
        return false;
      })
    );
  }
}
