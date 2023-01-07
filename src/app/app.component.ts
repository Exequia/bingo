import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PlayerFacade } from './store/facades/playerFacade';
import { ConfigFacade } from './store/facades/configFacade';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/router.animations';
import { MatDialog } from '@angular/material/dialog';
import { GiftResponse, GiftResponseType } from './models';
import { DIALOG_CLOSE_TIME, DIALOG_OPEN_TIME } from './config';
import { WelcomeNewPlayerDialogComponent } from './components/dialogs/welcome-new-player-dialog/welcome-new-player-dialog.component';
import { GameFacade } from './store/facades/gameFacade';
import { WebsocketService } from './services/websocket/websocket.service';
import { GamePlayerFacade } from './store/facades/gamePlayersFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  progress$ = this.configFacade.progress$;
  player$ = this.playerFacade.player$;
  gift$ = this.playerFacade.gift$;

  constructor(
    private readonly configFacade: ConfigFacade,
    private readonly playerFacade: PlayerFacade,
    private readonly gameFacade: GameFacade,
    private readonly contexts: ChildrenOutletContexts,
    private readonly gamePlayerFacade: GamePlayerFacade,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.gift$.subscribe(gift => {
      this.openDialog(gift);
    });
  }

  openDialog(gift: GiftResponse | undefined) {
    if (gift) {
      let component;
      let data;
      switch (gift.type) {
        case GiftResponseType.credit:
          component = WelcomeNewPlayerDialogComponent;
          data = { welcomePlayerAmmount: gift.balance };
          break;

        default:
          break;
      }
      if (component) {
        const dialogRef = this.dialog.open(component, {
          enterAnimationDuration: DIALOG_OPEN_TIME,
          exitAnimationDuration: DIALOG_CLOSE_TIME,
          data
        });
        dialogRef.afterClosed().subscribe(() => {
          this.gameFacade.manageGameGift(gift);
        }).unsubscribe;
      }
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  
  @HostListener('window:beforeunload')
  @HostListener('window:unload')
  ngOnDestroy(): void {
    this.player$
      .subscribe(localPlayer => {
        if (localPlayer?.id) {
          this.gamePlayerFacade.disconnectPlayer(localPlayer.id);
        }
      })  
      .unsubscribe();
  }
}
