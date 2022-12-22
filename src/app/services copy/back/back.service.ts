import { Injectable } from '@angular/core';
import { RoundResponseMock, CreatePlayerResponseMock } from '@app/mocks';
import { CreatePlayerResponse, RoundResponse } from '@app/models';
import { cloneDeep } from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor() { }

  createNewGamePlayer(playerName: string): Observable<CreatePlayerResponse> {
    const mock = cloneDeep(CreatePlayerResponseMock);
    mock.player.name = playerName;
    return new BehaviorSubject(mock);
  }

  shoppingRound(dashboardAmount: number): Observable<RoundResponse> {
    return new BehaviorSubject(RoundResponseMock)
  }

}
