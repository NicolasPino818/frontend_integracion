import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showcart:boolean = false;
  public carrito = productos;
  public total:number = 0;
  constructor() {}

  ngOnInit(): void {
    /*
    window.addEventListener('scroll',()=>{
      const scrolled = window.scrollY;
      const header = <HTMLDivElement>document.getElementById('header');
      if(!header.classList.contains('scrolled') && scrolled >= 50){
        header.classList.add('scrolled');
      }else if(header.classList.contains('scrolled') && scrolled < 50){
        header.classList.remove('scrolled');
      }
    })
    */

    /* for (let index = 0; index < productos.length; index++) {
      this.total += productos[index].data.precio;
    } */

    productos.forEach((e) => {
      this.total += e.data.precio
    });

  }

  menuHandler(){
    const menu = <HTMLUListElement>document.getElementById('menu-list');
    const menu_btn = <HTMLButtonElement>document.getElementById('menuToggler');

    menu_btn.classList.toggle('bx-menu');
    menu_btn.classList.toggle('bx-x');
    menu.classList.toggle('open')
  }

  menuClose(){
    const menu = <HTMLUListElement>document.getElementById('menu-list');
    const menu_btn = <HTMLButtonElement>document.getElementById('menuToggler');
    menu.classList.remove('open');
    menu_btn.classList.remove('bx-x');
    menu_btn.classList.add('bx-menu');
  }

  toggleCart(){
    this.showcart = !this.showcart;
  }

}
