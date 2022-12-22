import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyObserverComponent } from './on-destroy-observer.component';

describe('OnDestroyObserverComponent', () => {
  let component: OnDestroyObserverComponent;
  let fixture: ComponentFixture<OnDestroyObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDestroyObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDestroyObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
