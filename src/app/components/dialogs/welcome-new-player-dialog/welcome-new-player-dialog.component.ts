import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-new-player-dialog',
  templateUrl: './welcome-new-player-dialog.component.html',
  styleUrls: ['./welcome-new-player-dialog.component.scss'],
})
export class WelcomeNewPlayerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
