

import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'

import { Route, Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'detalle': ['',[Validators.required]],
    'foto': ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductosService,
    private router: Router,
    private seguridadrol: SeguridadService) { }

  ngOnInit(): void {
  }
  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let detalle = this.fgValidador.controls["detalle"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let producto = new ModeloProducto();
    producto.Nombre = nombre;
    producto.Precio = precio;
    producto.Detalle = detalle;
    producto.Foto = foto;

    this.servicioProducto.CrearProducto(producto).subscribe((datos: ModeloProducto) => {
      alert("El producto se almaceno correctamente")
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error:any) =>{
      alert("Error almacenando el producto")
  }
  )}
    
  }
