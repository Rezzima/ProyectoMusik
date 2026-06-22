import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class OfertasServices {
  ofertasArr: Producto[] = [];

  obtenerOfertas() {
    return this.ofertasArr;
  }
}
