import { ModeloMascota } from './../modelos/Mascota.modelo';
import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloProducto } from '../modelos/producto.modelo';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url= "http://localhost:3000";
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }
   CrearUsuario(usuario:ModeloUsuario):Observable<ModeloUsuario>{
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

   ObetenerMascotasPorDueno(id: string): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas?filter={"where":{"usuarioId":"${id}"}, "include":[{"relation":"plan"}]}`)

   }
  

   ObtenerMascotasXId(id: string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`)
  }
  ObtenerMascotas(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`)
  }
  CrearMascota(mascota:ModeloMascota):Observable<ModeloMascota>{
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  ActualizarMascota(mascota:ModeloMascota):Observable<ModeloMascota>{
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.Id}`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  EliminarMascota(id:string):Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
