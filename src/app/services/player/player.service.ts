import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor (private http: HttpClient) {}

  setPlayerName(name: string) {
    // return this.http.get('/movies');
    // return new Observable<>
  }
}