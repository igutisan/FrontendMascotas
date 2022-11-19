import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

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
