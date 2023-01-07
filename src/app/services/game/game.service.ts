import { Injectable } from '@angular/core';
import { GameStatus, GiftResponse } from '@app/models';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private readonly websocket: WebsocketService) { }

  setGameStatusInit() {
    this.websocket.setGameStatus(GameStatus.initialized);
  }
}
