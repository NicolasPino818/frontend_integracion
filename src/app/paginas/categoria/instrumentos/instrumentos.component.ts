import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMusicProService } from 'src/app/servicios/api-music-pro/api-music-pro.service';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.scss']
})
export class InstrumentosComponent implements OnInit {


  public productos;
  public categoria;

  constructor(private activeRoute: ActivatedRoute, private apiMusicPro:ApiMusicProService) { 

    this.activeRoute.params.subscribe((param) => {
      this.categoria = param['categoria'];

      this.apiMusicPro.getProductosByCategoria(this.categoria).subscribe((response)=>{
        this.productos = response.products

        console.log(this.productos)
      })
    })

  }

  ngOnInit(): void {
  }

}
