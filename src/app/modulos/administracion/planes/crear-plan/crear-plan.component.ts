import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {


  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'detalle': ['',[Validators.required]]
  });  
  constructor(private fb: FormBuilder,
    private servicioPlan: PlanesService,
    private router: Router,
    private seguridadrol: SeguridadService) { }

  ngOnInit(): void {
  }

  GuardarPlan(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let detalle = this.fgValidador.controls["detalle"].value;
    let plan = new ModeloPlanes();
    plan.NombrePlan = nombre;
    plan.Precio = precio;
    plan.Detalle = detalle

    this.servicioPlan.CrearPlan(plan).subscribe((datos: ModeloPlanes) => {
      alert("El plan se creo correctamente")
      this.router.navigate(["/administracion/listar-plan"])
    }, (error:any) =>{
      alert("Error creando el plan")
    })
  }


}
