import { DefinirEstadoComponent } from './definir-estado/definir-estado.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

const routes: Routes = [
  {
    
      path: 'listado-mascotas',
      component: ListarMascotasComponent,
      canActivate: [ValidadorSesionGuard]
    
  },
  {
    path:'detalles-mascotas/:id',
    component: DefinirEstadoComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
