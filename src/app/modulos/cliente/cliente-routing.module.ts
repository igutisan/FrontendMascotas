import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListarPlanesComponent } from './listar-planes/listar-planes.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

const routes: Routes = [
  {
    path:"crear-mascota/:id",
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"listar-mascota",
    component:BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-mascota/:id/:idplan",
    component:EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-mascota/:id",
    component:EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"listar-producto",
    component:ListarProductoComponent,
   canActivate: [ValidadorSesionGuard]

  },
  {
    path:"listar-planes",
    component:ListarPlanesComponent,
  canActivate: [ValidadorSesionGuard]
    
  },
  {
    path:"crear-cliente",
    component:CrearClienteComponent,
    canActivate: [ValidadorSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
