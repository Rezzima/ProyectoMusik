import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServices } from '../../servicios/carrito-services';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  productosEnCarrito: Producto[] = [];

  constructor(
    private carritoServ: CarritoServices
  ){}

  ngOnInit() {
    this.productosEnCarrito = this.carritoServ.obtenerProd();
  }

  aumentar(id: number) {
    this.carritoServ.aumentarCant(id);
  }

  disminuir(id: number) {
    this.carritoServ.disminuirCant(id);
  }

  eliminar(id: number){
    this.carritoServ.eliminarProd(id);
    this.productosEnCarrito = this.carritoServ.obtenerProd();
  }

}
