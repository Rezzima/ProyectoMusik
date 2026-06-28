import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoServices {
  carritoArray: Producto[] = [];

  //Create
  agregarACarrito(p: Producto) {
    const discoExistente = this.carritoArray.find(d => d.id === p.id);
    if (discoExistente) {
      alert("Producto ya en el carrito");
    }
    else {
      this.carritoArray.push({ ...p, cant: 1 });
    }
  }

  total: number = 0

  calcTotal() {
    this.total = 0;
    this.carritoArray.forEach(p => (this.total += p.precio * p.cant));
  }

  //Read
  obtenerProd() {
    return this.carritoArray;
  }

  aumentarCant(id: number) {
    const prod = this.carritoArray.find(p => p.id === id);
    if (prod) {
      if (prod.stock <= 0) {
        prod.cant--;
        alert("No hay stock suficiente");
      } else {
        prod.cant++;
        prod.stock--;
      }
      prod.precio;
    }
  }

  disminuirCant(id: number) {
    const prod = this.carritoArray.find(p => p.id === id);
    if (prod && prod.cant > 1) {
      prod.cant--;
    }
  }

  eliminarProd(id: number) {
    this.carritoArray = this.carritoArray.filter(p => p.id !== id);
  }

  comprarCarrito() {
    if (!this.carritoArray.length) {
      alert("No hay nada en el carrito")
    } else {
      alert("Gracias por comprar")
      this.carritoArray = [];
    }
  }

  elimCarrito() {
    if (!this.carritoArray.length) {
      alert("No hay nada en el carrito")
    } else {
      alert("Se ha eliminado el carrito")
      this.carritoArray = [];
    }
  }

}
