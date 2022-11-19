import { ModeloMascota } from './../../../modelos/Mascota.modelo';
import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

  listadoMascota: ModeloMascota[] = [];
  constructor(private mascotaServicio: AsesorService) { }

  ngOnInit(): void {
    this.ObtenerMascotaPendiente();
    this.ObtenerMascotasAceptadas();
    this.ObetenerMascotasRechazadas();
  }
  ObtenerMascotaPendiente(){
    this.mascotaServicio.ObetenerMascotasPorEstado().subscribe((datos:ModeloMascota[]) => {
      this.listadoMascota= datos;
    })
  }
  ObtenerMascotasAceptadas(){
    this.mascotaServicio.ObetenerMascotasAceptadas().subscribe((datos:ModeloMascota[]) => {
      this.listadoMascota= datos;
  })

}
ObetenerMascotasRechazadas(){
  this.mascotaServicio.ObetenerMascotasRechazadas().subscribe((datos:ModeloMascota[]) => {
    this.listadoMascota= datos;
  })
}
}



