import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-carrito-alert',
  templateUrl: './carrito-alert.component.html',
  styleUrls: ['./carrito-alert.component.scss']
})
export class CarritoAlertComponent implements OnInit {

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  

  openCart(){
    this.carrito.openCart();
  }


}
