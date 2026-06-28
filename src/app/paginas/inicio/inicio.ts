import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../servicios/productos-service';
import { OfertasServices } from '../../servicios/ofertas-services';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {

  // inject() trae el servicio sin necesitar constructor
  private ofertasService = inject(OfertasServices); 
  
  // Array donde se guardan todos los productos cuando carga el componente
  productos: Producto[] = [];

  // Posición actual del carrusel (qué producto está primero en pantalla)
  indice = 0;

  // Cuántas cartas se muestran al mismo tiempo
  visibles = 3;

  // ngOnInit se ejecuta una sola vez cuando el componente termina de crearse
  // Es el lugar correcto para cargar datos, no el constructor
  ngOnInit() {
    this.productos = this.ofertasService.filtroPrecioDestacado();
  }

  // Retrocede una posición. El if evita que el índice baje de 0
  anterior() {
    if (this.indice > 0) {
      this.indice--;
    }
  }

  // Avanza una posición.
  // El if evita pasarse del final: si tenés 9 productos y mostrás 3,
  // el índice máximo es 6 (para mostrar 6, 7 y 8)
  siguiente() {
    if (this.indice < this.productos.length - this.visibles) this.indice++;
  }

}
