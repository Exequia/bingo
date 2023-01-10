import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRowComponent } from './dashboard-row.component';

describe('DashboardRowComponent', () => {
  let component: DashboardRowComponent;
  let fixture: ComponentFixture<DashboardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
