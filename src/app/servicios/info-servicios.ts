import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class InfoServicios {
  infoArray: Producto[] = [];

  obtenerInfo(){
    return this.infoArray;
  }
}
