import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import {IdentificacionComponent} from './identificacion/identificacion.component';

const routes: Routes = [
  {
  path:"identificar",
  component: IdentificacionComponent,
  canActivate: [ValidadorSesionGuard]

  },
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "cambiar-contrasena",
    component: CambioContrasenaComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
