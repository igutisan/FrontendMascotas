import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListarPlanesComponent } from './listar-planes/listar-planes.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"crear-mascota/:id",
    component: CrearMascotaComponent
  },
  {
    path:"listar-mascota",
    component:BuscarMascotaComponent
  },
  {
    path:"editar-mascota/:id/:idplan",
    component:EditarMascotaComponent
  },
  {
    path:"eliminar-mascota/:id",
    component:EliminarMascotaComponent
  },
  {
    path:"listar-producto",
    component:ListarProductoComponent
  },
  {
    path:"listar-planes",
    component:ListarPlanesComponent
  },
  {
    path:"crear-cliente",
    component:CrearClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
