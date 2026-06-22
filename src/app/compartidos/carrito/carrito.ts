import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServices } from '../../servicios/carrito-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  productosEnCarrito: Producto[] = [];

  constructor(
    private carritoServ: CarritoServices
  ) { }

  ngOnInit() {
    this.productosEnCarrito = this.carritoServ.obtenerProd();
    this.calculartotal();
  }

  total: number = 0

  calculartotal() {
    this.carritoServ.calcTotal();
    this.total = this.carritoServ.total;
  }

  aumentar(id: number) {
    this.carritoServ.aumentarCant(id);
    this.calculartotal();
  }

  disminuir(id: number) {
    this.carritoServ.disminuirCant(id);
    this.calculartotal();
  }

  eliminar(id: number) {
    this.carritoServ.eliminarProd(id);
    this.productosEnCarrito = this.carritoServ.obtenerProd();
    this.calculartotal();
  }

  carritoComprar(){
    this.carritoServ.comprarCarrito();
    this.productosEnCarrito = this.carritoServ.obtenerProd();
    this.total = 0;
  }

  eliminarCarrito(){
    this.carritoServ.elimCarrito();
    this.productosEnCarrito = this.carritoServ.obtenerProd();
    this.total = 0;
  }

}
