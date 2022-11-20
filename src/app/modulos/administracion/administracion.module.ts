import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';

import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [

     
     CrearPlanComponent,
     EditarPlanComponent,
     EliminarPlanComponent,
     BuscarPlanComponent,
     PerfilComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
   
  ]
})
export class AdministracionModule { }
