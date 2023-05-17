import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const LOGIN_KEY = 'STATUS';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }



  crearEstadoLogin(status:boolean){
    localStorage.setItem(LOGIN_KEY, status+'')
  }

  logOut(){
    localStorage.removeItem(LOGIN_KEY)
    this.router.navigate(['/']);
  }

}
