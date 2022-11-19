import { ModeloUsuario } from './../../../../modelos/usuario.modelo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador:FormGroup = this.fb.group({
    'Nombre':['',[Validators.required]],
    'Apellido':['',[Validators.required]],
    'Documento':['',[Validators.required]],
    'Correo':['',[Validators.required]],
    'Celular':['',[Validators.required]],
    'Rol':['',[Validators.required]],
    'Direccion':['',[Validators.required]]
    
  })

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarUsuario(){
    let nombre = this.fgValidador.controls["Nombre"].value;
    let apellido = this.fgValidador.controls["Apellido"].value;
    let correo = this.fgValidador.controls["Correo"].value;
    let documento = this.fgValidador.controls["Documento"].value;
    let celular = this.fgValidador.controls["Celular"].value;
    let rol = this.fgValidador.controls["Rol"].value;
    let direccion = this.fgValidador.controls["Direccion"].value;
    let usuario = new ModeloUsuario();
    usuario.Nombre = nombre;
    usuario.Apellido = apellido;
    usuario.Documento = documento;
    usuario.Correo = correo;
    usuario.Celular = celular;
    usuario.Rol = rol;
    usuario.Direccion = direccion;

    this.servicioUsuario.CrearUsuario(usuario).subscribe((datos:ModeloUsuario) => {
      alert("El usuario se creo correctamente")
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error:any) => {
      alert("Error creando el usuario")
    })

  
  }

}
