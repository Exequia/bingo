import { TestBed } from '@angular/core/testing';

import { PlayerGuard } from './player.guard';

describe('CanActivatePlayerService', () => {
  let service: CanActivatePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivatePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
