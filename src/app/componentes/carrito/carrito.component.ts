import { Component, OnInit } from '@angular/core';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  
  public carrito:IProductoItem[] = [];
  public total:number = 0;

  constructor(private cart:CarritoService) {}

  ngOnInit(): void {
    this.getCartItems();
  }


  toggleCart(){
    this.cart.toggleCart();
  }

  updateCart(){

    const inputs = document.querySelectorAll('.input') as NodeListOf<HTMLInputElement>;

    if(this.carrito){
      this.carrito.forEach((e) => {
        for(let i = 0; i < inputs.length; i++){
          if((e.id == parseInt(inputs[i].id)) && (inputs[i].valueAsNumber <=  e.data.stockT) && (e.data.cantSelec != inputs[i].valueAsNumber)){
            e.data.cantSelec = inputs[i].valueAsNumber;
            break;
          }
        }
      });
      this.cart.updateItems(this.carrito);
      this.getCartItems();

      alert('¡Carrito Actualizado!')
    }
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
