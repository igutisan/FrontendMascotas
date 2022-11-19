import { ClienteService } from 'src/app/servicios/cliente.service';
import { ModeloMascota } from './../../../modelos/Mascota.modelo';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  Id:string = '';
  
  name = ''
 
  
  constructor(
    private servicioMascota: ClienteService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.Route.snapshot.params["id"];
    this.EliminarMascota();
  }
  OpenModal(){
  
  }
 

  EliminarMascota(){
   

    this.servicioMascota.EliminarMascota(this.Id).subscribe((datos: ModeloMascota) => {
      alert("La mascota se elimino correctamente")
      this.router.navigate(["/cliente/listar-mascota"]);
    }, (error:any) =>{
      alert("Error actualizando la mascota")
  }
  )}

}
