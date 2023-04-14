import { TestBed } from '@angular/core/testing';

import { ApiMusicProService } from './api-music-pro.service';

describe('ApiMusicProService', () => {
  let service: ApiMusicProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMusicProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
