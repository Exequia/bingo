import { Component } from '@angular/core';
import { selectProgressConfig } from './redux';
import { Store } from '@ngrx/store';
import { AppState } from './redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  progress$ = this.store.select(selectProgressConfig)

  constructor(private readonly store: Store<AppState>) {}
}
