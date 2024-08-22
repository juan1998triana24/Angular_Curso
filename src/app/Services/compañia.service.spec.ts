import { TestBed } from '@angular/core/testing';

import { CompañiaService } from './compañia.service';

describe('CompañiaService', () => {
  let service: CompañiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompañiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
