import { Component, OnInit,Output,EventEmitter,Input,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';

@Component({
  selector: 'app-editar-producto-modal',
  templateUrl: './editar-producto-modal.component.html',
  styleUrls: ['./editar-producto-modal.component.scss']
})
export class EditarProductoModalComponent implements OnInit {

  marcas;
  categorias;

  @Output() close = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @ViewChild("fileInput") fileInput;
  @Input() producto;

  productoForm: FormGroup;

  constructor(private apiMusicPro:ApiMusicProService) { }

  ngOnInit(): void {

    this.productoForm = new FormGroup({
      nom_producto: new FormControl('',[
        Validators.required,
        Validators.maxLength(200)
      ]),
      categoria: new FormControl('',[
        Validators.required,
      ]),
      marca: new FormControl('',[
        Validators.required,
      ]),
      precio: new FormControl('',[
        Validators.required,
        Validators.min(0),
        Validators.max(2147483647)
      ]),
      imagen: new FormControl(''),
      stock: new FormControl('',[
        Validators.required,
        Validators.min(0)
      ]),
      desc: new FormControl('',[
        Validators.required,
        Validators.maxLength(2500)
      ]),
      color: new FormControl('',[
        Validators.maxLength(150)
      ]),
      trastes: new FormControl('',[
        Validators.maxLength(150)
      ]),
      mat_cuerpo: new FormControl('',[
        Validators.maxLength(150)
      ]),
      mat_brazo: new FormControl('',[
        Validators.maxLength(150)
      ]),
      mat_diapason: new FormControl('',[
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

  submit(){
    //console.log(this.productoForm.controls)


    //console.log(this.fileInput.nativeElement.files[0]);
    let file = this.fileInput.nativeElement.files[0];
    
    if(this.productoForm.valid){
      this.apiMusicPro.crearProducto({
        categoria: this.productoForm.controls['categoria'].value,
        color: this.productoForm.controls['color'].value,
        desc: this.productoForm.controls['desc'].value,
        imagen: file,
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
            alert('Producto creado con exito');
            this.updateEvent.emit();
            this.closeModal();
          }
          
        })
      })
    }else{
      alert('Formulario Invalido')
    }
  }

  update(){

  }

  closeModal(){
    this.close.emit();
  }

}
