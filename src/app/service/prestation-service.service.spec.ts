import { TestBed } from '@angular/core/testing';

import { PrestationServiceService } from './prestation-service.service';

describe('PrestationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestationServiceService = TestBed.get(PrestationServiceService);
    expect(service).toBeTruthy();
  });
});
