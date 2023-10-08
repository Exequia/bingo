import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-on-destroy-observer',
  template: ''
})
export abstract class OnDestroyObserverComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
