import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectRouterFeature } from '../reducers';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  router$ = this.store.select(selectRouterFeature);

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  navigateTo(url: string = '') {
    this.router.navigate([url]);
  }
}
