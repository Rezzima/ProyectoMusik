import { Component, inject } from '@angular/core';
import { Prod } from '../../servicios/prod';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  svc = inject(Prod);

  lista = this.svc.productos;

  // Función que alterna el estado favorito de un producto
  // Recibe el 'id' del producto que se clickeó
  toggleFavorito(id: number) {
    this.svc.toggleFavorito(id);
  }
}
