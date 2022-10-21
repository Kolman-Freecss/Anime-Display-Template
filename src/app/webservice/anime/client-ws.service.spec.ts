import { TestBed } from '@angular/core/testing';

import { ClientWsService } from './client-ws.service';

describe('ClientWsService', () => {
  let service: ClientWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
