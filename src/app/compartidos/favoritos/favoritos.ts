import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  // svc = inject(Prod);

  // // Filtra solo los productos con favorito: true
  // favoritos = computed(() =>
  //   this.svc.productos().filter(p => p.favorito)
  // );

  // toggleFavorito(id: number) {
  //   this.svc.toggleFavorito(id);
  // }
}
