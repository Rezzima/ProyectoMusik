import { Component, OnInit } from '@angular/core';
import { FavoritosServices } from '../../servicios/favoritos-services';
import { Producto } from '../../models/producto';
import { CarritoServices } from '../../servicios/carrito-services';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  arrayFavoritos: Producto[] = [];

  constructor(
    private favoritosArr: FavoritosServices, private carritoArr: CarritoServices
  ){}

  ngOnInit(){
    this.arrayFavoritos = this.favoritosArr.obtenerFav();
  }

  agregarFav(p: Producto){
    this.favoritosArr.agregarAFavoritos(p);
  }

  elimFav(id: number){
    this.favoritosArr.eliminarFav(id);
    this.arrayFavoritos = this.favoritosArr.obtenerFav();
  }

  agregarCarrito(p: Producto){
    this.carritoArr.agregarACarrito(p);
  }

}
