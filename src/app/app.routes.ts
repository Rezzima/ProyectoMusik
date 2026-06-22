import { Routes } from '@angular/router';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Carrito } from './compartidos/carrito/carrito';
import { Inicio } from './paginas/inicio/inicio';
import { Info } from './compartidos/info/info';
import { Comprar } from './auth/comprar/comprar';

export const routes: Routes = [
    //Inicio predeterminado
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    //Rutas
    { path: 'contacto', component: Contacto },
    { path: 'ofertas', component: Ofertas },
    { path: 'productos', component: Productos },
    { path: 'inicio-sesion', component: InicioSesion },
    { path: 'registro', component: Registro },
    { path: 'favoritos', component: Favoritos },
    { path: 'carrito', component: Carrito },
    { path: 'inicio', component: Inicio },
    { path: 'info', component: Info },
    { path: 'comprar', component: Comprar },


    //En caso de error 404
    { path: '**', redirectTo: 'inicio' }

];
