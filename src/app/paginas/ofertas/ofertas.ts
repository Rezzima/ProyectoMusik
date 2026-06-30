import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { OfertasServices } from '../../servicios/ofertas-services';
import { CarritoServices } from '../../servicios/carrito-services';
import { FavoritosServices } from '../../servicios/favoritos-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit {
  ofertasNashe: Producto[] = [];

  private ofertasService = inject(OfertasServices);

  constructor(
    private carritoServicios: CarritoServices, private favoritosServ: FavoritosServices
  ){}

  ngOnInit() {
    this.ofertasNashe = this.ofertasService.filtroPrecioOFertas();
  }

  agregarAlCarrito(p: Producto) {
    this.carritoServicios.agregarACarrito(p);
  }

  toggleFavorito(p: Producto) {
    this.favoritosServ.agregarAFavoritos(p)
  }

}
