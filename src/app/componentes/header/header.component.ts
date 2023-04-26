import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showcart:boolean = true;
  public menuDetector:boolean = false;
  constructor(private cart:CarritoService) {
    this.cart.getCartStateAsObservable().subscribe((state)=>{
      this.showcart = state;
    });
  }

  ngOnInit(): void {

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
    this.cart.toggleCart();
  }

}
