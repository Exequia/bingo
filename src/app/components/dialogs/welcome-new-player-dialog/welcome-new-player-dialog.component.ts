import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BalanceType } from '@app/models';

@Component({
  selector: 'app-welcome-new-player-dialog',
  templateUrl: './welcome-new-player-dialog.component.html',
  styleUrls: ['./welcome-new-player-dialog.component.scss'],
})
export class WelcomeNewPlayerDialogComponent {
  balanceType = BalanceType.Add;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
