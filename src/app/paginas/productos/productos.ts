import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServices } from '../../servicios/carrito-services';
import { FavoritosServices } from '../../servicios/favoritos-services';
import { ProductosService } from '../../servicios/productos-service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  constructor(
    private carritoServicios: CarritoServices, private favoritosServ: FavoritosServices, private productosServ: ProductosService
  ) { }

  private productosServices = inject(ProductosService);

  prod: Producto[] = [];

  ngOnInit() {
    this.prod = this.productosServices.obtenerProductos();
  }

  productosObtener(){
    return this.productosServ.obtenerProductos();
  }

  agregarAlCarrito(p: Producto) {
    this.carritoServicios.agregarACarrito(p);
  }
  toggleFavorito(p: Producto) {
    this.favoritosServ.agregarAFavoritos(p)
  }
}
