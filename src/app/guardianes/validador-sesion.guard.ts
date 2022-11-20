import { SeguridadService } from './../servicios/seguridad.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidadorSesionGuard implements CanActivate {
  
  constructor(private servicioSeguridad: SeguridadService,
    private router: Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.servicioSeguridad.ObtenerInformacionsesion()){
      return true;
    }else{
      this.router.navigate(['/inicio']);
      return false;
    }


  }
  
}
