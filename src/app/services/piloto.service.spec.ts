import { TestBed } from '@angular/core/testing';

import { PilotoService } from './piloto.service';

describe('PilotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PilotoService = TestBed.get(PilotoService);
    expect(service).toBeTruthy();
  });
});
