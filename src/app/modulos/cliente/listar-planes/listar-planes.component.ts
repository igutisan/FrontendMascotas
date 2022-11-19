import { Component, OnInit } from '@angular/core';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-listar-planes',
  templateUrl: './listar-planes.component.html',
  styleUrls: ['./listar-planes.component.css']
})
export class ListarPlanesComponent implements OnInit {

  listadoPlanes: ModeloPlanes[] = [];
  constructor(private planesServicio: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }
  ObtenerListadoPlanes(){
    this.planesServicio.ObtenerPlanes().subscribe((datos:ModeloPlanes[]) => {
      this.listadoPlanes = datos;
    })
  }

}
