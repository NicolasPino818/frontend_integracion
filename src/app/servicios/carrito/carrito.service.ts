import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductoItem } from 'src/app/interfaces/interfaces';

const CARRITO_KEY = 'CARRITO';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productos: IProductoItem[] = [];
  private cartState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }


  toggleCart(){
    this.setCartState(!this.getCartState());
  }

  openCart(){
    this.setCartState(true);
  }

  closeCart(){
    this.setCartState(false);
  }


  getCartStateAsObservable(){
    return this.cartState.asObservable();
  }

  getCartState(){
    return this.cartState.value;
  }

  setCartState(bool:boolean){
    this.cartState.next(bool);
  }


  getItems(){
    let jsonString = localStorage.getItem(CARRITO_KEY);
    if(jsonString){
      let items = JSON.parse(jsonString);
      return items;
    }else{
      return null;
    }
  }

  addItem(item:IProductoItem){
    let jsonString = localStorage.getItem(CARRITO_KEY);
    if(jsonString){
      this.productos = JSON.parse(jsonString);

      let found = false;
      this.productos.forEach((i)=>{
        if (i.id == item.id) {
          if(i.data.cantSelec < item.data.stockT){
            i.data.cantSelec += item.data.cantSelec;
            localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
          }
          found = true;
        }
      });

      if (!found){
        this.productos.push(item);
        localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
      }

      found = false;

    }else{

      this.productos.push(item);
      localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
    }
    this.productos = [];

  }

  updateItems(items: IProductoItem[]){

    items.forEach((item)=>{
      if(item.data.cantSelec == 0){
        items = items.filter((prod)=>{
          return prod.id != item.id;
        })
      }
    })

    if(items.length > 0) localStorage.setItem(CARRITO_KEY, JSON.stringify(items));
    else localStorage.removeItem(CARRITO_KEY);
    
  }

  deleteItem(id:number){

    return new Promise((resolve)=>{
      let jsonString = localStorage.getItem(CARRITO_KEY);

      if(jsonString){
        this.productos = JSON.parse(jsonString);
        this.productos = this.productos.filter((obj)=>{
          return obj.id !== id;
        });
        if(this.productos.length > 0){
          localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
        }else{
          localStorage.removeItem(CARRITO_KEY);
        }
        this.productos = [];
      }
      resolve(true);
    })
  }
}
