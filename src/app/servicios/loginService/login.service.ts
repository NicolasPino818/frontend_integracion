import { Injectable } from '@angular/core';

const LOGIN_KEY = 'STATUS';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }



  crearEstadoLogin(status:boolean){
    localStorage.setItem(LOGIN_KEY, status+'')
  }


}
