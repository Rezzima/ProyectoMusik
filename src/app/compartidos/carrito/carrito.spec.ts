import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoServices } from '../../servicios/carrito-services';

describe('Carrito', () => {
  let component: CarritoServices;
  let fixture: ComponentFixture<CarritoServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoServices],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
