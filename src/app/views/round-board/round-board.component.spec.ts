import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundBoardComponent } from './round-board.component';

describe('RoundBoardComponent', () => {
  let component: RoundBoardComponent;
  let fixture: ComponentFixture<RoundBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
