import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRowCellComponent } from './dashboard-row-cell.component';

describe('DashboardRowCellComponent', () => {
  let component: DashboardRowCellComponent;
  let fixture: ComponentFixture<DashboardRowCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRowCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRowCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
