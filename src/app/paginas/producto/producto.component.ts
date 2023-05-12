import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { producto } from 'src/app/modelos/models';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos;
  public ShowAddToCart: boolean = false;
  public disblebtn = false;
  public showDolar:boolean = false;
  public precioDolar: number = 0;

  public relacionados;
  public categoria;

  constructor(private actRoute:ActivatedRoute, private router:Router, private carrito:CarritoService, private apiMusicPro:ApiMusicProService) { 

    this.actRoute.params.subscribe((param) => {

      this.relacionados = null;
      this.productos = null;

      this.ShowAddToCart = false;
      window.scrollTo(0, 0);
      this.showDolar = false;
      this.precioDolar = null;
      this.disblebtn = false;
      let id = param['id'];
      this.categoria = param['categoria'];
  
      this.apiMusicPro.getProductosByCategoria(this.categoria).subscribe((res)=>{
        this.productos = res.products.find((prod)=>{ 
          return prod.id == id
        });

        this.relacionados = res.products.filter((prod)=>{
          return prod.id != id;
        });

      })
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


  getDolar(){
    this.disblebtn = true;
    this.apiMusicPro.getPrecioDolar()
    .subscribe(response=>{
      if(response){
        this.showDolar = true;
        this.precioDolar = this.productos.precio * response.rate
        
      }
    })
  }

}

