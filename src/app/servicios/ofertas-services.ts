import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from './productos-service';

@Injectable({
  providedIn: 'root',
})
export class OfertasServices {
  private productosService = inject(ProductosService);

  filtroPrecioOFertas(): Producto[] {
    return this.productosService.obtenerProductos().filter(p => p.precio < 20);
  }

  filtroPrecioDestacado(): Producto[] {
    return this.productosService.obtenerProductos().filter(p => p.precio >= 20);
  }

  obtenerOfertas(): Producto[] {
    return this.productosService.obtenerProductos().filter(p => p.dispo === true);
  }
}
