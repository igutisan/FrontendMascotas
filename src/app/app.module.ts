import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarProductoComponent } from './modulos/administracion/productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './modulos/administracion/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './modulos/administracion/productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './modulos/administracion/productos/eliminar-producto/eliminar-producto.component';
import { BuscarUsuarioComponent } from './modulos/administracion/usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './modulos/administracion/usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './modulos/administracion/usuarios/eliminar-usuario/eliminar-usuario.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesPipe } from './modulos/pipes.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    CrearProductoComponent,
    EliminarProductoComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
