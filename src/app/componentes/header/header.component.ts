import { Component, OnInit } from '@angular/core';
import { ICarritoItem } from 'src/app/interfaces/interfaces';
import { producto } from 'src/app/modelos/models';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showcart:boolean = false;
  public menuDetector:boolean = false;
  public carrito:ICarritoItem[] = [];
  public total:number = 0;
  constructor(private cart:CarritoService) {}

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

  }

  menuHandler(){
    const menu = <HTMLUListElement>document.getElementById('menu-list');
    const menu_btn = <HTMLButtonElement>document.getElementById('menuToggler');

    menu_btn.classList.toggle('bx-menu');
    menu_btn.classList.toggle('bx-x');
    menu.classList.toggle('open');
    this.menuDetector = !this.menuDetector;
  }

  menuClose(){
    const menu = <HTMLUListElement>document.getElementById('menu-list');
    const menu_btn = <HTMLButtonElement>document.getElementById('menuToggler');
    menu.classList.remove('open');
    menu_btn.classList.remove('bx-x');
    menu_btn.classList.add('bx-menu');
    this.menuDetector = false;
  }

  toggleCart(){
    this.showcart = !this.showcart;
    if(this.showcart) this.getCartItems();
    
  }


  updateCart(){

  }

  getCartItems(){
    this.carrito = [];
    this.total = 0;
    
    this.carrito = this.cart.getItems();
    if(this.carrito){
      this.carrito.forEach((e) => {
        this.total += e.data.precio * e.data.cantSelec;
      });
    }
    
  }

  deleteItem(id:number){
    this.cart.deleteItem(id).then(()=>{
      this.getCartItems();
    });
  } 

}
