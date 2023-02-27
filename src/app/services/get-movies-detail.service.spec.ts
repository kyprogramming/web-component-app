import { TestBed } from '@angular/core/testing';

import { GetMoviesDetailService } from './get-movies-detail.service';

describe('GetMoviesDetailService', () => {
  let service: GetMoviesDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
