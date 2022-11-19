import { SeguridadService } from './../../../servicios/seguridad.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';
import { ModeloMascota } from 'src/app/modelos/Mascota.modelo';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  id:string = '';
  idUsuario = '';
  idPlan='';
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'especie': ['',[Validators.required]],
    'color': ['',[Validators.required]],
    'raza': ['',[Validators.required]],
    'peso': ['',[Validators.required]],
    'edad': ['',[Validators.required]],
    'tamano': ['',[Validators.required]],
    'sexo': ['',[Validators.required]],
    'foto': ['',[Validators.required]]
    
  });
  
  constructor(private fb: FormBuilder,
    private servicioMascota: ClienteService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute,
    private seguridad: SeguridadService) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params["id"];
    this.idPlan=this.Route.snapshot.params["idPlan"]
    this.BuscarMascota();
    this.idUsuario = this.seguridad.VerificacionId();
  }
  BuscarMascota(){

    this.servicioMascota.ObtenerMascotasXId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["especie"].setValue(datos.Especie); 
      this.fgValidador.controls["color"].setValue(datos.Color);
      this.fgValidador.controls["raza"].setValue(datos.Raza);
      this.fgValidador.controls["peso"].setValue(datos.Peso); 
      this.fgValidador.controls["edad"].setValue(datos.Edad); 
      this.fgValidador.controls["tamano"].setValue(datos.Tamano);
      this.fgValidador.controls["sexo"].setValue(datos.Sexo); 
      this.fgValidador.controls["foto"].setValue(datos.Foto); 
      this.fgValidador.controls["idPlan"].setValue(this.idPlan); 

    })
  }

  EditarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let color = this.fgValidador.controls["color"].value;
    let raza = this.fgValidador.controls["raza"].value;
    let peso = parseInt(this.fgValidador.controls["peso"].value);
    let edad = parseInt(this.fgValidador.controls["edad"].value);
    let Tamano = parseInt(this.fgValidador.controls["tamano"].value);
    let sexo = this.fgValidador.controls["sexo"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let mascota = new ModeloMascota();
    mascota.Nombre = nombre;
    mascota.Especie = especie;
    mascota.Color = color;
    mascota.Raza = raza;
    mascota.Peso = peso;
    mascota.Edad = edad;
    mascota.Tamano = Tamano
    mascota.Sexo = sexo;
    mascota.Foto = foto;
    mascota.Id = this.id;
    mascota.usuarioId= this.idUsuario;
    mascota.planId=this.idPlan;
    mascota.Estado="pendiente";
    mascota.Detalle="pendiente"

   
    this.servicioMascota.ActualizarMascota(mascota).subscribe((datos: ModeloMascota) => {
      alert("la mascota se actualizo correctamente")
      this.router.navigate(["/cliente/listar-mascota"]);
    }, (error:any) =>{
      alert("Error actualizando la mascota")
  }
  )}

}
