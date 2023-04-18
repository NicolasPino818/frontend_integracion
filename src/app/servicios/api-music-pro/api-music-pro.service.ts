import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMusicProService {

  constructor(private http: HttpClient) { }


  apiTransbank(){
    //return this.http.put(`${environment.transbankBaseRoute}/venta`);
  }


}
