import { filter } from 'rxjs';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { UsuariosService } from './../../../../servicios/usuarios.service';
import { ProductosService } from './../../../../servicios/productos.service';
import { ModeloUsuario } from './../../../../modelos/usuario.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {
  
  listadoUsuario: ModeloUsuario[] = [];
  
  constructor(private usuarioServicio: UsuariosService) { }

 

  ngOnInit(): void {
    this.ObtenerUsuarios();
    //this.ObtenerAsesores();
    //this.ObtenerClientes();
    //this.ObtenerAdministradores();
  }
  
  ObtenerUsuarios(){
    this.usuarioServicio.ObtenerUsuario().subscribe((datos:ModeloUsuario[]) => {
      this.listadoUsuario= datos;
    })
  }

  ObtenerAdministradores(){
    this.usuarioServicio.ObtenerAdministrador().subscribe((datos: ModeloUsuario[]) => {
      this.listadoUsuario = datos;
    })
  }
  ObtenerClientes(){
    this.usuarioServicio.ObtenerCliente().subscribe((datos: ModeloUsuario[]) => {
      this.listadoUsuario = datos
    })
  }
  ObtenerAsesores(){
    this.usuarioServicio.ObtenerAsesor().subscribe((datos: ModeloUsuario[]) => {
      this.listadoUsuario =datos;
    })
  }


}
