import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { producto } from 'src/app/modelos/models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos!: IProductoItem;

  constructor(private actRoute:ActivatedRoute) { 

    let id = this.actRoute.snapshot.params['id'];

    this.productos = producto.find((prod)=>{ 
      return prod.id == id
    });
  
  }

  ngOnInit(): void {
  }

}

