import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  // Variable que rastrea si la contraseña es visible o no
  // false = oculta (tipo password), true = visible (tipo text)
  showPassword = false;

  // Función que alterna la visibilidad de la contraseña
  // Cada vez que se llama, invierte el valor booleano actual
  // false -> true -> false -> true ...
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
}
