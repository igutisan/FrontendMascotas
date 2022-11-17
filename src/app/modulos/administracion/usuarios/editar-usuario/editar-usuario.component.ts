import {UsuariosService} from 'src/app/servicios/usuarios.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Apellido: ['', [Validators.required]],
    Documento: ['', [Validators.required]],
    Correo: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Rol: ['', [Validators.required]],
    Direccion: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario();
  }
  BuscarUsuario() {
    this.servicioUsuario.ObtenerUsuariosXId(this.id).subscribe((datos:ModeloUsuario) => {
    this.fgValidador.controls['nombre'].setValue(datos.Nombre);
    this.fgValidador.controls['apellido'].setValue(datos.Apellido);
    this.fgValidador.controls['correo'].setValue(datos.Correo);
    this.fgValidador.controls['documento'].setValue(datos.Documento);
    this.fgValidador.controls['celular'].setValue(datos.Celular);
    this.fgValidador.controls['rol'].setValue(datos.Rol);
    this.fgValidador.controls['direccion'].setValue(datos.Direccion);
   })
  }

  EditarUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let Usuario = new ModeloUsuario()
    Usuario.Nombre =nombre
    Usuario.Apellido=apellido
    Usuario.Correo=correo
    Usuario.Documento=documento
    Usuario.Celular=celular
    Usuario.Rol=rol
    Usuario.Direccion=direccion

    this.servicioUsuario.ActualizarUsuario(Usuario).subscribe((datos: ModeloUsuario) =>{
      alert("El usuario se actualizo correctamente")
      this.router.navigate(["/administracion/editar-usuario"]);

    }, (errror:any) =>{
      alert("Error actualizando el usuario")
    }
  
  )}

}
