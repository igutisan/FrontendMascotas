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
  _filterText: string = '';
  listadoUsuario: ModeloUsuario[] = [];
  usuariosfiltrados:  ModeloUsuario[] = []
  constructor(private usuarioServicio: UsuariosService) { }

  get filterText(){
    return this._filterText
  }
  set filterText(value: string){
    this._filterText = value
    usuariosfiltrados: this.filtrarUsuarios(value);
  }

  ngOnInit(): void {
    this.ObtenerUsuarios();
    this.ObtenerAsesores();
    this.ObtenerClientes();
    this.ObtenerAdministradores();
    

  
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
  filtrarUsuarios(filterTerm:string){
    if(this.listadoUsuario.length === 0 || this.filterText === ''){
      return this.listadoUsuario;
    }else{
      return this.listadoUsuario.filter((usuarios)=>
      {
        return usuarios.Nombre?.toLocaleLowerCase() === filterTerm.toLocaleLowerCase()
      })
    }
  }

}
