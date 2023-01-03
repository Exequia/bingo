import { Injectable } from '@angular/core';
import { CreatePlayerResponse } from '@app/models';
import { PlayerFacade } from '@app/store/facades/playerFacade';
import { Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(
    private readonly playerFacade: PlayerFacade
  ) {
    this.initializeWebSocketConnection();
  }
  public stompClient: any;
  public msg: any[] = [];
  initializeWebSocketConnection() {
    console.log('init websocket config');
    const serverUrl = 'http://localhost:8080/bingo-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/topic/game/players', (message: any) => {
        if (message.body) {
          // TODO: gestionar jugadores
          console.log('messages', message.body);
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message: any) {
    this.stompClient.send('/app/hello', {}, message);
  }

  newPlayer(playerName: string) {
    this.stompClient.send('/app/players/new', {}, JSON.stringify({ name: playerName }));
  }

  createNewGamePlayer(playerName: string) {
    this.stompClient.subscribe('/user/queue/reply', (message: any) => {
      if (message.body) {
        console.log('user/queue/reply general subscription', message.body);
        const localPlayer = JSON.parse(message.body);
        this.playerFacade.createNewGamePlayerSuccess(localPlayer)
      }
    });
    this.stompClient.send('/app/players/new', {}, JSON.stringify({ name: playerName }));
  }
}
