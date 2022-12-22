import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePlayerResponse, PlayerBase, PlayerResponse } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  castPlayerResponse(player: PlayerResponse): PlayerBase {
    return <PlayerBase>{...player};
  }
}
