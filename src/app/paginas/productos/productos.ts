import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServices } from '../../servicios/carrito-services';
import { FavoritosServices } from '../../servicios/favoritos-services';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(
    private carritoServicios: CarritoServices, private favoritosServ: FavoritosServices
  ) { }

  Prod: Producto[] = [
    {
      id: 1,
      nombre: "AmeriKKKa's most wanted",
      descripcion: "Album de estudio en solista del rapero estadounidense Ice Cube",
      precio: 23,
      stock: 150,
      imagen: "assets/amerikkkas.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 0
    },
    {
      id: 2,
      nombre: "Illmatic",
      descripcion: "Album debut del rapero estadounidense Nas",
      precio: 15,
      stock: 50,
      imagen: "assets/illmatic.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 0
    },
    {
      id: 3,
      nombre: "Rompelo Ahí",
      descripcion: "Album debut del grupo de cumbia turra Argentina 'Los Nota Lokos'",
      precio: 5,
      stock: 250,
      imagen: "assets/rompelo_ahi.png",
      categoria: "Cumbia",
      dispo: true,
      favorito: false,
      cant: 0
    },
    {
      id: 4,
      nombre: "Kill At Will",
      descripcion: "EP del rapero estadounidense Ice Cube",
      precio: 20,
      stock: 110,
      imagen: "assets/kill_at_will.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 0
    },
    {
      id: 5,
      nombre: "Caravana",
      descripcion: "Album debut del rapero Argentino Wos",
      precio: 13,
      stock: 50,
      imagen: "assets/caravana.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 0
    },
    {
      id: 6,
      nombre: "Illmatic",
      descripcion: "Album debut del rapero estadounidense Nas",
      precio: 13,
      stock: 50,
      imagen: "assets/placeholder.png",
      categoria: "Rap/Hip-Hop",
      dispo: false,
      favorito: false,
      cant: 0
    },
  ];

  agregarAlCarrito(p: Producto) {
    this.carritoServicios.agregarACarrito(p);
  }
  toggleFavorito(p: Producto) {
    this.favoritosServ.agregarAFavoritos(p)
  }
}
