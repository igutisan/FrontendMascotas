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

  ObtenerMascotas():Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`)
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
