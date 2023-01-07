import { Injectable } from '@angular/core';
import { GamePlayer } from '@app/models';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class GamePlayersService {
  constructor(private readonly websocket: WebsocketService) {}

  addPlayer(gamePlayer: GamePlayer) {
    this.websocket.addGamePlayer(gamePlayer);
  }

  disconnectPlayer(gamePlayerId: string) {
    this.websocket.disconnectGamePlayer(gamePlayerId);
  }
}
