import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'
import {SeguridadService} from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Route, Router } from '@angular/router';


type NewType = FormGroup;

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: NewType = this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["clave"].value;
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario,contrasenaCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error:any) => {
      alert("Datos invalidos");
    })
  }

}
