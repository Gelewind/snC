import { TestBed } from '@angular/core/testing';

import { KarateService } from './karate.service';

describe('KarateService', () => {
  let service: KarateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KarateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
