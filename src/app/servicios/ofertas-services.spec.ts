import { TestBed } from '@angular/core/testing';

import { OfertasServices } from './ofertas-services';

describe('OfertasServices', () => {
  let service: OfertasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
