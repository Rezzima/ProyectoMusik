import { TestBed } from '@angular/core/testing';

import { InfoServicios } from './info-servicios';

describe('InfoServicios', () => {
  let service: InfoServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
