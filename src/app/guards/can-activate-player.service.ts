import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { PlayerFacade } from '@app/redux/facades/playerFacade';
import { RouterFacade } from '@app/redux/facades/routerFacade';
import { map } from 'rxjs';
import { take } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanActivatePlayer implements CanActivate {
  player$ = this.playerFacade.player$;

  constructor(
    private readonly playerFacade: PlayerFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.player$.pipe(
      take(1),
      map((player) => {
        if (!!player.name) {
          return true;
        } else {
          this.routerFacade.navigateTo('/player');
          return false;
        }
      })
    );
  }
}
