import { ModeloMascota } from './../../../modelos/Mascota.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from './../../seguridad/seguridad.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  id = ''
  listaMascotas: ModeloMascota[] = [];

  constructor(private fb: FormBuilder,
    private servicioMascotas: ClienteService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute,
    private seguridad: SeguridadService) { }

  ngOnInit(): void {
    this.BuscarMascotas();
  }
  BuscarMascotas(){
    this.id = this.seguridad.ObetenerId();
    this.servicioMascotas.ObetenerMascotasPorDueno(this.id).subscribe((datos: ModeloMascota[]) => {
      this.listaMascotas = datos;
    })

}
}
