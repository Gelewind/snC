import { TestBed } from '@angular/core/testing';

import { CacheclientService } from './cacheclient.service';

describe('CacheclientService', () => {
  let service: CacheclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
