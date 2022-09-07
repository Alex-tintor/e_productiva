import { TestBed } from '@angular/core/testing';

import { CentrosFormacionService } from './centros-formacion.service';

describe('CentrosFormacionService', () => {
  let service: CentrosFormacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosFormacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
