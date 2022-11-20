import { ModeloProspecto } from './../../modelos/prospecto.modelo';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
   fgValidador:FormGroup= this.fb.group({
    'Nombre': ['',[Validators.required]],
    'Correo':['',[Validators.required]],
    'Detalle':['',[Validators.required]],
    'Celular':['',[Validators.required]]
    
   })

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }
  CrearPropecto(){
    let nombre = this.fgValidador.controls["Nombre"].value;
    let celular = this.fgValidador.controls["Celular"].value;
    let correo = this.fgValidador.controls["Correo"].value;
    let detalle = this.fgValidador.controls["Detalle"].value;
    let propecto = new ModeloProspecto();
    propecto.Nombre = nombre;
    propecto.Correo = correo;
    propecto.Detalle = detalle;
    propecto.Telefono = celular;

    this.servicioUsuario.CrearProspecto(propecto).subscribe((datos:ModeloProspecto)=>{
      alert("Se le acaba de enviar un correo")
  
    }, (error:any)=>{
      alert("Error")
    })
  }

}
