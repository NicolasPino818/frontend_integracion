import { TestBed } from '@angular/core/testing';

import { ApiTransbankService } from './api-transbank.service';

describe('ApiTransbankService', () => {
  let service: ApiTransbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTransbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
