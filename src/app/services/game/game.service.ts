import { Injectable } from '@angular/core';
import { GameConfig, GameStatus, GiftResponse } from '@app/models';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private readonly websocket: WebsocketService) { }

  setGameStatusInit() {
    this.websocket.setGameStatus(GameStatus.initialized);
  }

  initConfigurationGame(gameConfig: GameConfig) {
    this.websocket.initConfigurationGame(gameConfig);
  }
}
