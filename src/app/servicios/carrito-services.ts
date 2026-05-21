import { Injectable, signal } from '@angular/core';
import { Productos } from '../paginas/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoServices {
  carritoArray = (p: Productos)=>[] = [];
}
