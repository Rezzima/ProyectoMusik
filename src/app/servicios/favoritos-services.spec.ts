import { TestBed } from '@angular/core/testing';

import { FavoritosServices } from './favoritos-services';

describe('FavoritosServices', () => {
  let service: FavoritosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
