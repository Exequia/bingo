import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundValuesComponent } from './round-values.component';

describe('RoundValuesComponent', () => {
  let component: RoundValuesComponent;
  let fixture: ComponentFixture<RoundValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
