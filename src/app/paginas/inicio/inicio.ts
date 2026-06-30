import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  inicioArr: Producto[] = [];
  
}
