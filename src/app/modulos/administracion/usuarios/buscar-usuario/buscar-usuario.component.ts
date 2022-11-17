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
  
  }
  ObtenerUsuarios(){
    this.usuarioServicio.ObtenerUsuario().subscribe((datos:ModeloProducto[]) => {
      this.listadoUsuario=datos;
    })
  }

}
