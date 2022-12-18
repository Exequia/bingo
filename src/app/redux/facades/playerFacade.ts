import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPlayerName } from '../actions';
import { selectPlayerFeature } from '../reducers';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacade {
  player$ = this.store.select(selectPlayerFeature);

  constructor(private store: Store<AppState>) {}

  setPlayerName(name: string) {
    this.store.dispatch(setPlayerName({name}));
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
