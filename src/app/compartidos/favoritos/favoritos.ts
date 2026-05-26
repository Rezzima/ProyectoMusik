import { Component, OnInit } from '@angular/core';
import { FavoritosServices } from '../../servicios/favoritos-services';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  arrayFavoritos: Producto[] = [];

  constructor(
    private favoritosArr: FavoritosServices
  ){}

  ngOnInit(){
    this.arrayFavoritos = this.favoritosArr.obtenerFav();
  }

  agregarFav(favorito: boolean){
    this.favoritosArr.agregarAFavoritos
  }

}
