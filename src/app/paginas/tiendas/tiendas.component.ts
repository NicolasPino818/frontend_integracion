import { Component, OnInit } from '@angular/core';
import { tiendas } from 'src/app/modelos/models';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent implements OnInit {

  tiendas = tiendas;

  constructor() { }

  ngOnInit(): void {
  }

}
