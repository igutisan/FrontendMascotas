import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { ListarPlanesComponent } from './listar-planes/listar-planes.component';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    ListarProductoComponent,
    ListarPlanesComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
