import { TestBed } from '@angular/core/testing';

import { AprendicesService } from './aprendices.service';

describe('AprendicesService', () => {
  let service: AprendicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprendicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
