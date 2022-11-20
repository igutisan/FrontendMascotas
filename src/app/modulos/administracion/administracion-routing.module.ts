import { ValidadorSesionGuard } from './../../guardianes/validador-sesion.guard';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import {BuscarUsuarioComponent} from './usuarios/buscar-usuario/buscar-usuario.component';
import {CrearUsuarioComponent} from './usuarios/crear-usuario/crear-usuario.component';
import {EditarUsuarioComponent} from './usuarios/editar-usuario/editar-usuario.component';
import {EliminarUsuarioComponent} from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-usuarios',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto/:id',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-plan',
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-plan',
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
