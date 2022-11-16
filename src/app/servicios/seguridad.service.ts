import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http2SecureServer} from 'http2';
import {BehaviorSubject, Observable} from 'rxjs';
import {ModeloIdentificar} from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

 url= 'http://localhost:3000'
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  HttpHeaders: any;
  constructor(private http: HttpClient) {
    this.VerificarSesionActual
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionsesion();
    if(datos){
      this.refrescarDatos(datos);
    }
  }
  refrescarDatos(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }


  Identificar(usuario: string, contrasena: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
      usuario: usuario,
      contrasena: contrasena
    },{
      headers: new HttpHeaders({

      })
    })
  }
  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }
  AlmacenarSesion(datos:ModeloIdentificar){
    
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.refrescarDatos(datos);
  }

  ObtenerInformacionsesion(){
    let datosString = localStorage.getItem("datosSesion")
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }

  }
  
  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.refrescarDatos(new ModeloIdentificar());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion")
   return datosString;
    
  }


  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if (datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }

  
}
