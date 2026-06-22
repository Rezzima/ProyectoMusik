import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { OfertasServices } from '../../servicios/ofertas-services';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit {
  ofertasNashe: Producto[] = [];
  
 constructor(
     private ofertasArr: OfertasServices,
   ){}
 
   ngOnInit(){
     this.ofertasNashe = this.ofertasArr.obtenerOfertas();
   }
}
