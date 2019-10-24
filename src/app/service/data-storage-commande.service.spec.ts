import { TestBed } from '@angular/core/testing';

import { DataStorageCommandeService } from './data-storage-commande.service';

describe('DataStorageCommandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStorageCommandeService = TestBed.get(DataStorageCommandeService);
    expect(service).toBeTruthy();
  });
});
