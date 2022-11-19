import { DefinirEstadoComponent } from './definir-estado/definir-estado.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';

const routes: Routes = [
  {
    
      path: 'listado-mascotas',
      component: ListarMascotasComponent
    
  },
  {
    path:'detalles-mascotas/:id',
    component: DefinirEstadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
