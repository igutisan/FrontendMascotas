import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {
  id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'detalle': ['',[Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioPlan: PlanesService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params["id"];
    this.BuscarPlan();
  }
  BuscarPlan(){

    this.servicioPlan.ObtenerPlanesPorId(this.id).subscribe((datos: ModeloPlanes) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.NombrePlan);
      this.fgValidador.controls["precio"].setValue(datos.Precio); 
      this.fgValidador.controls["detalle"].setValue(datos.Detalle);       
    })
  }

  EditarPlan(){
    let nombrePlan = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let detalle = this.fgValidador.controls["detalle"].value;
    let plan = new ModeloPlanes();
    plan.NombrePlan = nombrePlan;
    plan.Precio = precio;
    plan.Detalle = detalle
    plan.Id = this.id

    this.servicioPlan.ActualizarPlan(plan).subscribe((datos: ModeloPlanes) => {
      alert("El plan se actualizo correctamente")
      this.router.navigate(["/administracion/listar-plan"]);
    }, (error:any) =>{
      alert("Error actualizando el producto")
  }
  )}


}
