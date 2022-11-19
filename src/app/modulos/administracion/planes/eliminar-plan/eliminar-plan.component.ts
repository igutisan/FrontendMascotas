import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})
export class EliminarPlanComponent implements OnInit {

  id:string = '';
  
  name = ''
 
  
  constructor(
    private servicioPlan: PlanesService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params["id"];
    this.EliminarPlan();
  }
  OpenModal(){
  
  }
 

  EliminarPlan(){
   

    this.servicioPlan.EliminarPlan(this.id).subscribe((datos: ModeloPlanes) => {
      alert("El plan se elimino correctamente")
      this.router.navigate(["/administracion/listar-plan"]);
    }, (error:any) =>{
      alert("Error actualizando el producto")
  }
  )}


}
