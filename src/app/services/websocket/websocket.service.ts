import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor() {
    this.initializeWebSocketConnection();
  }
  public stompClient: any;
  public msg: any[] = [];
  initializeWebSocketConnection() {
    console.log('init websocket config');
    const serverUrl = 'http://localhost:8080/gs-guide-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, (frame: any) => {
      that.stompClient.subscribe('/topic/greetings', (message: any) => {
        if (message.body) {
          console.log('messages', message.body);
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message: any) {
    this.stompClient.send('/app/hello', {}, message);
  }
}
