import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeNewPlayerDialogComponent } from '@app/components/dialogs/welcome-new-player-dialog/welcome-new-player-dialog.component';
import {
  DIALOG_OPEN_TIME,
  DIALOG_CLOSE_TIME,
  WELCOME_PLAYER_AMOUNT,
} from '@app/config/dialogConstants';
import { PlayerFacade } from '@app/redux/facades/playerFacade';
import { RouterFacade } from '@app/redux/facades/routerFacade';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  private readonly welcomePlayerAmmount: number = WELCOME_PLAYER_AMOUNT;

  constructor(
    private readonly playerFacade: PlayerFacade,
    private readonly routerFacade: RouterFacade,
    public dialog: MatDialog
  ) {}

  setName(playerName: string) {
    this.playerFacade.createNewGamePlayer(playerName);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WelcomeNewPlayerDialogComponent, {
      enterAnimationDuration: DIALOG_OPEN_TIME,
      exitAnimationDuration: DIALOG_CLOSE_TIME,
      data: { welcomePlayerAmmount: this.welcomePlayerAmmount },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.playerFacade.addCredit(WELCOME_PLAYER_AMOUNT);
      this.routerFacade.navigateTo();
    }).unsubscribe;
  }
}
