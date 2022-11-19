import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  
  Id:string = '';
  
  name = ''
 
  
  constructor(
    private servicioProducto: ProductosService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.Route.snapshot.params["id"];
    this.EliminarProducto();
  }
  OpenModal(){
  
  }
 

  EliminarProducto(){
   

    this.servicioProducto.EliminarProducto(this.Id).subscribe((datos: ModeloProducto) => {
      alert("El producto se elimino correctamente")
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error:any) =>{
      alert("Error actualizando el producto")
  }
  )}

}
