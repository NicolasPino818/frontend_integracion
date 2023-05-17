import { Component, OnInit } from '@angular/core';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';
import { LoginService } from 'src/app/servicios/loginService/login.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  page:number = 0;
  count:number = 0;
  productos;


  editProducto;
  showModal = false;
  showPutModal = false;

  constructor(private apiMusicPro:ApiMusicProService,private login:LoginService) { }

  ngOnInit(): void {

    this.updateList();

  }


  delete_product(id:number){
    if(confirm('Quiere eliminar este producto?')==true){
      this.apiMusicPro.deleteProducto(id).subscribe((res)=>{
        if(res.success){
          this.updateList();
        }
      })
    }
  }

  updateList(){
    this.productos = [];
    this.apiMusicPro.getProductos().subscribe((res)=>{
      this.productos = res.productos;
    })
  }

  toogleModal(){
    this.showModal = !this.showModal;
  }

  toogleModalPut(productData?){

    if(productData) this.editProducto = productData;

    this.showPutModal = !this.showPutModal;

  }

  logOut(){
    this.login.logOut();
  }

}
