import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

  productoForm:FormGroup
  categorias;
  marcas;

  @Output() close = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @ViewChild("fileInput") fileInput;
  @Input() producto;
  constructor(private apiMusicPro:ApiMusicProService) { }

  ngOnInit(): void {
    this.productoForm = new FormGroup({
      nom_producto: new FormControl(this.producto.nom_producto,[
        Validators.required,
        Validators.maxLength(200)
      ]),
      categoria: new FormControl(this.producto.categoria,[
        Validators.required,
      ]),
      marca: new FormControl(this.producto.marca,[
        Validators.required,
      ]),
      precio: new FormControl(this.producto.precio,[
        Validators.required,
        Validators.min(0),
        Validators.max(2147483647)
      ]),
      imagen: new FormControl(''),
      stock: new FormControl(this.producto.stock,[
        Validators.required,
        Validators.min(0)
      ]),
      desc: new FormControl(this.producto.desc,[
        Validators.required,
        Validators.maxLength(2500)
      ]),
      color: new FormControl(this.producto.color,[
        Validators.maxLength(150)
      ]),
      trastes: new FormControl(this.producto.trastes,[
        Validators.maxLength(150)
      ]),
      mat_cuerpo: new FormControl(this.producto.mat_cuerpo,[
        Validators.maxLength(150)
      ]),
      mat_brazo: new FormControl(this.producto.mat_neck,[
        Validators.maxLength(150)
      ]),
      mat_diapason: new FormControl(this.producto.fingerb,[
        Validators.maxLength(150)
      ]),
    })

    this.apiMusicPro.getCategorias().subscribe((res)=>{
      this.categorias = res.categorias
    })

    this.apiMusicPro.getMarcas().subscribe((res)=>{
      this.marcas = res.marcas
    })
  }

  closeModal(){
    this.close.emit();
  }

  submit(){

    if(this.fileInput.nativeElement.files[0] == null){
      if(this.productoForm.valid){
        this.apiMusicPro.updateProducto({
          id:this.producto.id,
          categoria: this.productoForm.controls['categoria'].value,
          color: this.productoForm.controls['color'].value,
          desc: this.productoForm.controls['desc'].value,
          imagen: this.producto.imagen,
          marca: this.productoForm.controls['marca'].value,
          nom_producto: this.productoForm.controls['nom_producto'].value,
          precio: this.productoForm.controls['precio'].value,
          precio_ofer: null,
          stock: this.productoForm.controls['stock'].value,
          trastes: this.productoForm.controls['trastes'].value,
          mat_cuerpo: this.productoForm.controls['mat_cuerpo'].value,
          mat_fingerb: this.productoForm.controls['mat_brazo'].value,
          mat_neck: this.productoForm.controls['mat_diapason'].value,
        }).then((e)=>{
          e.subscribe((res)=>{
            if(res.success) {
              alert('Producto modificado con exito');
              this.updateEvent.emit();
              this.closeModal();
            }
          })
        })
      }else{
        alert('Formulario Invalido')
      }
    }else{
      let reader = new FileReader();
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
      let api = this.apiMusicPro;
      let productoForm = this.productoForm;
      let producto = this.producto;
      let update = this.updateEvent;
      let close = this.close;
      function closeModal(){
        close.emit();
      }
      reader.onloadend = function(){
        let copy = reader.result.toString().split(',');
        api.updateProducto({
          id:producto.id,
          categoria: productoForm.controls['categoria'].value,
          color: productoForm.controls['color'].value,
          desc: productoForm.controls['desc'].value,
          imagen: copy[1],
          marca: productoForm.controls['marca'].value,
          nom_producto: productoForm.controls['nom_producto'].value,
          precio: productoForm.controls['precio'].value,
          precio_ofer: null,
          stock: productoForm.controls['stock'].value,
          trastes: productoForm.controls['trastes'].value,
          mat_cuerpo: productoForm.controls['mat_cuerpo'].value,
          mat_fingerb: productoForm.controls['mat_brazo'].value,
          mat_neck: productoForm.controls['mat_diapason'].value,
        }).then((e)=>{
          e.subscribe((res)=>{
            if(res.success) {
              alert('Producto modificado con exito');
              update.emit();
              closeModal();
            }
          })
        })
      }
    }
  }

}
