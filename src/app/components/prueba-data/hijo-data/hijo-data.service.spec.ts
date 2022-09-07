import { TestBed } from '@angular/core/testing';

import { HijoDataService } from './hijo-data.service';

describe('HijoDataService', () => {
  let service: HijoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HijoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
