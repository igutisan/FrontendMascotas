import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ModeloUsuario } from './../modelos/usuario.modelo';
import { Observable } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:3000";
  token: String = '';
  constructor(private http: HttpClient, private SeguridadServicio: SeguridadService) { 
    
    this.token = this.SeguridadServicio.ObtenerToken();
  }

  ObtenerUsuariosXId(id:string): Observable<ModeloUsuario>{
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`)
    
  }

  ObtenerUsuario():Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`)
  }
  
  ObtenerUsuariosAsesor(): Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios?filter[where][rol]=Asesor`)
  }

  CrearUsuario(usuario:ModeloUsuario):Observable<ModeloUsuario>{
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarUsuario(usuario:ModeloUsuario):Observable<ModeloUsuario>{
    return this.http.put(`${this.url}/usuarios/${usuario.id}`, usuario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarUsuario(id:string):Observable<any>{
    return this.http.delete(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}

