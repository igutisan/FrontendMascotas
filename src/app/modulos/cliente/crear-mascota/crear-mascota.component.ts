import { ModeloMascota } from './../../../modelos/Mascota.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidador:FormGroup = this.fb.group({
    'Nombre':['',[Validators.required]],
    'Especie':['',[Validators.required]],
    'Color':['',[Validators.required]],
    'Raza':['',[Validators.required]],
    'Edad':['',[Validators.required]],
    'Peso':['',[Validators.required]],
    'Tamano':['',[Validators.required]],
    'Sexo':['',[Validators.required]],
    'Foto':['',[Validators.required]]
    
  })



  constructor(private fb: FormBuilder,
    private servicioMascota: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let color = this.fgValidador.controls["color"].value;
    let raza = this.fgValidador.controls["raza"].value;
    let peso = this.fgValidador.controls["peso"].value;
    let edad = this.fgValidador.controls["edad"].value;
    let Tamano = this.fgValidador.controls["tamano"].value;
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


    this.servicioMascota.CrearMascota(mascotas).subscribe((datos:ModeloMascota) => {
      alert("La mascota se creo correctamente")
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error:any) => {
      alert("Erro creando el usuario")
    })
}
