import { Injectable } from '@angular/core';
import { ICarritoItem } from 'src/app/interfaces/interfaces';

const CARRITO_KEY = 'CARRITO';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productos: ICarritoItem[] = [];
  constructor() { }


  getItems(){
    let jsonString = localStorage.getItem(CARRITO_KEY);
    if(jsonString){
      let items = JSON.parse(jsonString);
      return items;
    }else{
      return null;
    }
  }

  addItem(item:ICarritoItem){
    let jsonString = localStorage.getItem(CARRITO_KEY);

    if(jsonString){
      this.productos = JSON.parse(jsonString);

      for (let i = 0; i < this.productos.length; i++) {

        if(this.productos[i].id == item.id){
          this.productos[i].data.cantSelec += item.data.cantSelec;
          
          localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
          break;

        }else if(i == (this.productos.length - 1)){
          this.productos.push(item);
          localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
        }

      }

    }else{
      this.productos.push(item);
      localStorage.setItem(CARRITO_KEY, JSON.stringify(this.productos));
      
    }
    this.productos = [];

  }

  updateItem(){

  }

  updateItems(){

  }

  deleteItems(){

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
