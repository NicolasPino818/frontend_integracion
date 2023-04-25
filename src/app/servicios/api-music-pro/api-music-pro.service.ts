import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMusicProService {

  constructor(private http: HttpClient) { 

  }


  getProducto(id:number): Observable<IProductoItem> | string{
    return  '';//this.http.get(`${environment.musicproBaseRoute}/producto/${id}`,);
  }


}
