import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  listadoRegistros: ModeloProducto[] = [];
  constructor(private productoServicio: ProductosService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }
  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos:ModeloProducto[]) => {
      this.listadoRegistros = datos;
    })
  }

}
