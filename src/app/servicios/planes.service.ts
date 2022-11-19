import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlanes } from '../modelos/planes.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  url = "http://localhost:3000";
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerPlanesPorId(id: string): Observable<ModeloPlanes>{
    return this.http.get<ModeloPlanes>(`${this.url}/plans/${id}`)
  }

  ObtenerPlanes(): Observable<ModeloPlanes[]>{
    return this.http.get<ModeloPlanes[]>(`${this.url}/plans`)
  }

  CrearPlan(plan:ModeloPlanes):Observable<ModeloPlanes>{
    return this.http.post<ModeloPlanes>(`${this.url}/plans`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPlan(plan:ModeloPlanes):Observable<ModeloPlanes>{
    return this.http.put<ModeloPlanes>(`${this.url}/plans/${plan.Id}`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  EliminarPlan(id:string):Observable<any>{
    return this.http.delete(`${this.url}/plans/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

