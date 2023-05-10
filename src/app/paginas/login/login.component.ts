import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';
import { LoginService } from 'src/app/servicios/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  constructor(private apiMusicPro: ApiMusicProService, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      user: new FormControl('',[
        Validators.required,
      ]),
      passw: new FormControl('',[
        Validators.required,
      ])
    })

  }

  login(){

    if(!this.loginForm.invalid){
      this.apiMusicPro.login({user: this.loginForm.controls['user'].value,passw:this.loginForm.controls['passw'].value})
      .subscribe((response)=>{
        if(response.success == true){
          this.loginService.crearEstadoLogin(true)
          this.router.navigate(['cuenta']);
        }else{
          alert('credenciales incorrectas')
        }
      })
    }else{
      alert('Invalido')
    }

  }

}
