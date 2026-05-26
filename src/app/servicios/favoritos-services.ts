import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class FavoritosServices {
   favoritosArray: Producto[] = [];

  agregarAFavoritos(p: Producto) {
    const alreadyFav = this.favoritosArray.find(d => d.id === p.id);
    if (alreadyFav) {
      alert("Ya en favoritos")
    } else {
      this.favoritosArray.push(p);
    }
  };

  obtenerFav() {
    return this.favoritosArray;
  };

  eliminarFav(id: number) {
    this.favoritosArray = this.favoritosArray.filter(p => p.id !== id);
  }

}
