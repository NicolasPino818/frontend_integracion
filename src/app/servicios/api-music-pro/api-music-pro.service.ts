import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductoItem } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMusicProService {

  headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { 

  }


  getProducto(id:number): Observable<IProductoItem> | string{
    return  '';//this.http.get(`${environment.musicproBaseRoute}/producto/${id}`,);
  }


  getPrecioDolar():Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}data/`,{headers: this.headers});
  }


  getCategorias():Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}data/`,{headers: this.headers});
  }

  getProductosByCategoria(categoria:string):Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}products/${categoria}`,{headers: this.headers});

  }
  login({user,passw}):Observable<any>{
    return this.http.post(`${environment.musicproBaseRoute}login/`,{user,passw},{headers: this.headers});

  }

  
}
