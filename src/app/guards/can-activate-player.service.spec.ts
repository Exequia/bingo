import { TestBed } from '@angular/core/testing';

import { CanActivatePlayerService } from './can-activate-player.service';

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
