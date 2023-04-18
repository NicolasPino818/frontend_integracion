import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showcart:boolean = false;

  constructor() { }

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
