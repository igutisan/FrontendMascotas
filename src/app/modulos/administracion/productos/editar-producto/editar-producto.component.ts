import { BuscarProductoComponent } from './../buscar-producto/buscar-producto.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'detalle': ['',[Validators.required]],
    'foto': ['',[Validators.required]]

  });
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductosService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params["id"];
    this.BuscarProducto();
  }
  BuscarProducto(){

    this.servicioProducto.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloProducto) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["precio"].setValue(datos.Precio); 
      this.fgValidador.controls["detalle"].setValue(datos.Detalle);   
      this.fgValidador.controls["foto"].setValue(datos.Foto);    
    })
  }

  EditarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let detalle = this.fgValidador.controls["detalle"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let producto = new ModeloProducto();
    producto.Nombre = nombre;
    producto.Precio = precio;
    producto.Detalle = detalle
    producto.Id = this.id
    producto.Foto = foto

    this.servicioProducto.ActualizarProducto(producto).subscribe((datos: ModeloProducto) => {
      alert("El producto se actualizo correctamente")
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error:any) =>{
      alert("Error actualizando el producto")
  }
  )}
    
  
}
