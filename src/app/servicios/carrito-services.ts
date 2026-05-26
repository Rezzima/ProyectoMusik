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
      this.carritoArray.push({...p, cant: 1});
    }
  }

  //Read
  obtenerProd() {
    return this.carritoArray;
  }

  aumentarCant(id: number) {
    const prod = this.carritoArray.find(p => p.id === id);
    if (prod) {
      prod.cant++;
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

}
