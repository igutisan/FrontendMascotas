import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
