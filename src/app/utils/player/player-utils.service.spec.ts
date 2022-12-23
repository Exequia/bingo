import { TestBed } from '@angular/core/testing';

import { PlayerUtils } from './player-utils.service';

describe('PlayerUtilsService', () => {
  let service: PlayerUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
