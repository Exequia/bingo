import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNewPlayerDialogComponent } from './welcome-new-player-dialog.component';

describe('WelcomeNewPlayerDialogComponent', () => {
  let component: WelcomeNewPlayerDialogComponent;
  let fixture: ComponentFixture<WelcomeNewPlayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeNewPlayerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeNewPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
