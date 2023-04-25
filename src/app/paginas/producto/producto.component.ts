import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarritoItem, IProductoItem } from 'src/app/interfaces/interfaces';
import { producto } from 'src/app/modelos/models';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos!: IProductoItem;

  constructor(private actRoute:ActivatedRoute, private router:Router, private carrito:CarritoService) { 

    let id = this.actRoute.snapshot.params['id'];

    this.productos = producto.find((prod)=>{ 
      return prod.id == id
    });
  
  }

  ngOnInit(): void {

  }

  addToCart(){
    const input = <HTMLInputElement>document.getElementById('cantidad_inp');

    if(input.valueAsNumber <= this.productos.data.stockT && input.valueAsNumber > 0){
      let carritoObj:ICarritoItem = {
        fotoSRC: this.productos.fotoSRC,
        id: this.productos.id,
        tituloProd: this.productos.tituloProd,
        data: {
          cantSelec: input.valueAsNumber,
          precio: this.productos.data.precio,
          stockT: this.productos.data.stockT
        }
      }

      this.carrito.addItem(carritoObj);
      
    }else{
      alert('Ingrese una cantidad valida >:c')
    }

    
  }

}

