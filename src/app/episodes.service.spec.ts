import { TestBed } from '@angular/core/testing';

import { EpisodesService } from './episodes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('EpisodesService', () => {
  let service: EpisodesService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(EpisodesService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all episodes (http)', () => {
    service.getAll().subscribe(data => {
      expect(data.results).toEqual([{}]);
    });

    const res = httpTestController.expectOne('https://rickandmortyapi.com/api/episode');
    res.flush({results: [{}]});
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
