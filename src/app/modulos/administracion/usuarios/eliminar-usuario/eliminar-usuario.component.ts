import { UsuariosService } from './../../../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  Id:string = '';
  
  name = ''
 
  
  constructor(
    private servicioUsuario: UsuariosService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.Route.snapshot.params["id"];
    this.EliminarUsuario();
  }
  OpenModal(){
  
  }
 

  EliminarUsuario(){
   

    this.servicioUsuario.EliminarUsuario(this.Id).subscribe((datos: ModeloUsuario) => {
      alert("El Usuario se elimino correctamente")
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error:any) =>{
      alert("Error actualizando el usuario")
  }
  )}

}
