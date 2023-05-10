import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate() {

    let state:boolean = JSON.parse(localStorage.getItem('STATUS'))

    if(state){
      return true;
    }else{
      return false;
    }
  }
  
}
