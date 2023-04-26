import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { producto } from 'src/app/modelos/models';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos!: IProductoItem;
  public ShowAddToCart: boolean = false;

  public relacionados: IProductoItem[];

  constructor(private actRoute:ActivatedRoute, private router:Router, private carrito:CarritoService) { 

    this.actRoute.params.subscribe((param) => {

      this.ShowAddToCart = false;
      window.scrollTo(0, 0);


      let id = param['id'];

      this.productos = producto.find((prod)=>{ 
        return prod.id == id
      });
  
      this.relacionados = producto.filter((prod)=>{
        return prod.id != id;
      });
    })
  }

  ngOnInit(): void {

  }

  addToCart(){
    const input = <HTMLInputElement>document.getElementById('cantidad_inp');

    if(input.valueAsNumber <= this.productos.data.stockT && input.valueAsNumber > 0){
      let carritoObj:IProductoItem = {
        fotoSRC: this.productos.fotoSRC,
        id: this.productos.id,
        tituloProd: this.productos.tituloProd,
        data: {
          cantSelec: input.valueAsNumber,
          precio: this.productos.data.precio,
          stockT: this.productos.data.stockT,
        }
      }

      this.carrito.addItem(carritoObj);
      this.ShowAddToCart = true;
      
    }else{
      alert('Ingrese una cantidad valida >:c')
    }
  }

}

