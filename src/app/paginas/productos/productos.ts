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
      alt: "AmeriKKKasMostWanted_Cover",
      descripcion: "Álbum de estudio en solista del rapero estadounidense Ice Cube",
      precio: 23,
      stock: 150,
      imagen: "assets/amerikkkas.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 70
    },
    {
      id: 2,
      nombre: "Illmatic",
      alt: "Illmatic_Cover",
      descripcion: "Álbum debut del rapero estadounidense Nas",
      precio: 15,
      stock: 50,
      imagen: "assets/illmatic.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 150
    },
    {
      id: 3,
      nombre: "Rompelo Ahí",
      alt: "RompeloAhi_Cover",
      descripcion: "Álbum debut del grupo de cumbia turra Argentina 'Los Nota Lokos'",
      precio: 5,
      stock: 250,
      imagen: "assets/rompelo_ahi.png",
      categoria: "Cumbia",
      dispo: true,
      favorito: false,
      cant: 10
    },
    {
      id: 4,
      nombre: "Kill At Will",
      alt: "KillAtWill_Cover",
      descripcion: "EP del rapero estadounidense Ice Cube",
      precio: 20,
      stock: 110,
      imagen: "assets/kill_at_will.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 50
    },
    {
      id: 5,
      nombre: "Caravana",
      alt: "Caravana_cover",
      descripcion: "Álbum debut del rapero Argentino Wos",
      precio: 13,
      stock: 50,
      imagen: "assets/caravana.png",
      categoria: "Rap/Hip-Hop",
      dispo: true,
      favorito: false,
      cant: 100
    },
    {
      id: 6,
      nombre: "Illmatic",
      alt: "Illmatic_Cover",
      descripcion: "Album debut del rapero estadounidense Nas",
      precio: 13,
      stock: 50,
      imagen: "assets/placeholder.png",
      categoria: "Rap/Hip-Hop",
      dispo: false,
      favorito: false,
      cant: 0
    },
    {
      id: 7,
      nombre: "La vida era mas corta",
      alt: "la_vida_era_mas_corta_cover",
      descripcion: "Tercer álbum de estudio del cantautor Argentino Milo J",
      precio: 35,
      stock: 50,
      imagen: "assets/laVidaEraMasCorta.png",
      categoria: "Folklore Argentino",
      dispo: true,
      favorito: false,
      cant: 250
    },
    {
      id: 8,
      nombre: "111",
      alt: "111_cover",
      descripcion: "Álbum debut del cantante Argentino Milo j",
      precio: 23,
      stock: 50,
      imagen: "assets/111.png",
      categoria: "Alt",
      dispo: true,
      favorito: false,
      cant: 200
    },
    {
      id: 9,
      nombre: "Películas",
      alt: "películas_Cover",
      descripcion: "Segundo álbum de estudio de la banda Argentina La Maquina De Hacer Pájaros",
      precio: 35,
      stock: 50,
      imagen: "assets/laMaquinaDeHacerPajaros.png",
      categoria: "Rock Progresivo",
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
