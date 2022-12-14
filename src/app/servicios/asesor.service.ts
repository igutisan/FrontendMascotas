import { ModeloMascota } from './../modelos/Mascota.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url = "http://localhost:3000";
  token: String = '';
  constructor(private http: HttpClient, private SeguridadServicio: SeguridadService) { 
    
    this.token = this.SeguridadServicio.ObtenerToken();
  }

  ObetenerMascotasPorEstado(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas?filter={"where":{"Estado":"pendiente"}, "include":[{"relation":"usuario"},{"relation":"plan"}]}`)

   }
   ObetenerMascotasRechazadas(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas?filter={"where":{"Estado":"Rechazado"}, "include":[{"relation":"usuario"},{"relation":"plan"}]}`)

   }
   ObetenerMascotasAceptadas(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas?filter={"where":{"Estado":"Aceptado"}, "include":[{"relation":"usuario"},{"relation":"plan"}]}`)

   }

  ObtenerMascotas():Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas?filter={"include":[{"relation":"usuario"},{"relation":"plan"}]}`)
  }
  ObtenerMascotasXId(id:string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`)
    
  }
  ActualizarMascota(mascota:ModeloMascota):Observable<ModeloMascota>{
    return this.http.put(`${this.url}/mascotas/{id}${mascota.Id}`, mascota,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })


  
}
}
