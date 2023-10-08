import { Injectable } from '@angular/core';
import { Dashboard, DashboardRowCell, GameConfig, GameStatusEnum, PlayerBase, ShoppingRequest } from '@app/models';
import { findIndex, isEqual } from 'lodash';
import { WebsocketService } from '../websocket/websocket.service';
import { PlayerFacade } from '@app/store/facades/playerFacade';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private readonly websocket: WebsocketService, private readonly playerFacade: PlayerFacade) {}

  setGameStatusInit() {
    this.websocket.setGameStatus(GameStatusEnum.initialized);
  }

  initConfigurationGame(gameConfig: GameConfig) {
    this.websocket.initConfigurationGame(gameConfig);
  }

  shoppingRound(dashboardAmount: number, player: PlayerBase) {
    const shoppingRequest: ShoppingRequest = {
      playerId: player?.id!,
      dashboardAmount
    };
    this.websocket.shoppingRound(shoppingRequest);
  }

  updateGameRoundData(newValue: DashboardRowCell, gameRoundDashboards: Dashboard[] | undefined) {
    if (!!gameRoundDashboards) {
      gameRoundDashboards.forEach((dashboard, dashboardIndex) => {
        dashboard?.rows.forEach((row, rowIndex) => {
          const matchCellIndex: number = findIndex(row.cells, cell => isEqual(cell.value, newValue.value));
          if (matchCellIndex != -1) {
            this.playerFacade.setMatchCell(dashboardIndex, rowIndex, matchCellIndex);
          }
          //TODO: Check line or bingo
        });
      });
    }
  }
}
