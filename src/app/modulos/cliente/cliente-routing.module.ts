import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path:"listar-mascota",
    component:BuscarMascotaComponent
  },
  {
    path:"editar-mascota/:id",
    component:EditarMascotaComponent
  },
  {
    path:"eliminar-mascota",
    component:EliminarMascotaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
