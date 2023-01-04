import { TestBed } from '@angular/core/testing';

import { GamePlayersService } from './game-players.service';

describe('GamePlayersService', () => {
  let service: GamePlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
