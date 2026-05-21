import { Component, inject } from '@angular/core';
import { CarritoServices } from '../../servicios/carrito-services';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  svc = inject(CarritoServices)
  
  lista = this.svc.carritoArray

}
