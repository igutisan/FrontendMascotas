import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloMascota } from './../../../modelos/Mascota.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidador:FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'especie':['',[Validators.required]],
    'color':['',[Validators.required]],
    'raza':['',[Validators.required]],
    'edad':['',[Validators.required]],
    'peso':['',[Validators.required]],
    'tamano':['',[Validators.required]],
    'sexo':['',[Validators.required]],
    'foto':['',[Validators.required]]
    
  })
  idUsuario=''
  idPlan=''



  constructor(private fb: FormBuilder,
    private servicioMascota: ClienteService,
    private router: Router,
    private seguridad: SeguridadService,
    private Route:ActivatedRoute) { }

  ngOnInit(): void {
      this.idUsuario = this.seguridad.VerificacionId();
      this.idPlan = this.Route.snapshot.params["id"];
  }
  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let color = this.fgValidador.controls["color"].value;
    let raza = this.fgValidador.controls["raza"].value;
    let peso = parseInt(this.fgValidador.controls["peso"].value);
    let edad = parseInt(this.fgValidador.controls["edad"].value);
    let Tamano = parseInt(this.fgValidador.controls["tamano"].value);
    let sexo = this.fgValidador.controls["sexo"].value;
    let foto = this.fgValidador.controls["foto"].value;
    
    
    let mascotas = new ModeloMascota();
    mascotas.Nombre = nombre;
    mascotas.Especie = especie;
    mascotas.Color = color;
    mascotas.Raza = raza;
    mascotas.Peso = peso;
    mascotas.Edad = edad;
    mascotas.Tamano = Tamano;
    mascotas.Sexo = sexo;
    mascotas.Foto = foto;
    mascotas.Detalle = "detalle";
    mascotas.Estado = "pendiente";
    mascotas.planId= this.idPlan;
    mascotas.usuarioId = this.idUsuario;
  


    this.servicioMascota.CrearMascota(mascotas).subscribe((datos:ModeloMascota) => {
      alert("La mascota se creo correctamente")
      this.router.navigate(["/cliente/listar-mascota"]);
    }, (error:any) => {
      alert("Error creando el usuario")
    })
}
}
