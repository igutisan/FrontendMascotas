import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador:FormGroup = this.fb.group({
    'Nombre':['',[Validators.required]],
    'Apellido':['',[Validators.required]],
    'Documento':['',[Validators.required]],
    'Correo':['',[Validators.required]],
    'Celular':['',[Validators.required]],
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
    
    let direccion = this.fgValidador.controls["Direccion"].value;
    let usuario = new ModeloUsuario();
    usuario.Nombre = nombre;
    usuario.Apellido = apellido;
    usuario.Documento = documento;
    usuario.Correo = correo;
    usuario.Celular = celular;
    usuario.Rol = "Cliente";
    usuario.Direccion = direccion;

    this.servicioUsuario.CrearUsuario(usuario).subscribe((datos:ModeloUsuario) => {
      alert("Se a registrado correctamente, revise su correo")
      this.router.navigate(["/inicio"]);
    }, (error:any) => {
      alert("Error registrandose")
    })

  
  }

}
