import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProgressConfig } from '../selectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class ConfigFacade {
  progress$ = this.store.select(selectProgressConfig);

  constructor(private store: Store<AppState>) {}
}
