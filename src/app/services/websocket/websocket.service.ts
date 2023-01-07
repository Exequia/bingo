import { Injectable } from '@angular/core';
import { GameConfig, GamePlayer, GameStatus } from '@app/models';
import { GameFacade } from '@app/store/facades/gameFacade';
import { GamePlayerFacade } from '@app/store/facades/gamePlayersFacade';
import { PlayerFacade } from '@app/store/facades/playerFacade';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private readonly playerFacade: PlayerFacade, private readonly gamePlayerFacade: GamePlayerFacade, private readonly gameFacade: GameFacade) {
    this.initializeWebSocketConnection();
  }

  public stompClient: any;
  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/bingo-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/topic/game/players', (message: any) => {
        if (message.body) {
          this.gamePlayerFacade.loadGamePlayers(JSON.parse(message.body));
        }
      });
      that.stompClient.subscribe('/topic/game/status', (message: any) => {
        if (message.body) {
          this.gameFacade.updateGameStatus(JSON.parse(message.body));
        }
      });
      that.stompClient.subscribe('/topic/game/config', (message: any) => {
        if (message.body) {
          this.gameFacade.setGameConfigSuccess(JSON.parse(message.body));
        }
      });
    });
  }

  createNewGamePlayer(playerName: string) {
    this.stompClient.subscribe('/user/queue/reply', (message: any) => {
      if (message.body) {
        this.playerFacade.createNewGamePlayerSuccess(JSON.parse(message.body));
      }
    });
    this.stompClient.send('/app/players/new', {}, JSON.stringify({ name: playerName }));
  }

  addGamePlayer(gamePlayer: GamePlayer) {
    this.stompClient.send('/app/game/player', {}, JSON.stringify({ ...gamePlayer }));
  }

  disconnectGamePlayer(gamePlayerId: string) {
    this.stompClient.send('/app/game/disconect', {}, gamePlayerId);
  }
  
  setGameStatus(initialized: GameStatus) {
    this.stompClient.send('/app/game/status', {}, JSON.stringify(initialized));
  }

  initConfigurationGame(gameConfig: GameConfig) {
    this.stompClient.send('/app/game/config', {}, JSON.stringify({...gameConfig}));
  }
}
