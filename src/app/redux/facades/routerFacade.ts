import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setPlayerName } from '../actions';
import { selectPlayerFeature, selectRouterFeature } from '../reducers';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  router$ = this.store.select(selectRouterFeature);

  constructor(private store: Store<AppState>, private readonly router: Router) {}

  navigateTo(url: string = '') {
    this.router.navigate([url]);
  }

  // addNewTodo(todo: string) {
  //   this.store.dispatch(new AddTodo(todo));
  // }

  // editTodo(id: string, todo: string) {
  //   this.store.dispatch(new EditTodo({ id, todo }));
  // }

  // deleteTodo(id: string) {
  //   this.store.dispatch(new DeleteTodo(id));
  // }
}
