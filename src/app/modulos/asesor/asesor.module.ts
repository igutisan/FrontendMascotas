import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefinirEstadoComponent } from './definir-estado/definir-estado.component';


@NgModule({
  declarations: [
    ListarMascotasComponent,
    DefinirEstadoComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }
