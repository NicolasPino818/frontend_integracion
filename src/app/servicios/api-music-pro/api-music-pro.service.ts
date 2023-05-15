import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMusicProService {

  headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) {}


  getProductos(): Observable<any>{
    return  this.http.get(`${environment.musicproBaseRoute}products/all/`,{headers: this.headers});
  }

  deleteProducto(id:number): Observable<any> | any{
    return  this.http.delete(`${environment.musicproBaseRoute}products/${id}/`,{headers: this.headers});
  }

  crearProducto({nom_producto,precio,precio_ofer,imagen,stock,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria}): Promise<any>{
    return new Promise(async (resolve,reject)=>{
      let today = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
      if(imagen){
        let http = this.http;
        let headers = this.headers;
        let reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.onloadend = function(){
          let copy = reader.result.toString().split(',');
          resolve(http.post(`${environment.musicproBaseRoute}products/create/`,{nom_producto,precio,precio_ofer,imagen: copy[1] ,stock,fecha_creacion: today,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria},{headers: headers}));
        }
        reader.onerror = function(e){
          reject(e)
        }
      }else{
        resolve( this.http.post(`${environment.musicproBaseRoute}products/create/`,{nom_producto,precio,precio_ofer,imagen: null ,stock,fecha_creacion: today,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria},{headers: this.headers}));
      }
    })
  }


  updateProducto({id,nom_producto,precio,precio_ofer,imagen,stock,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria}): Promise<any>{
    return new Promise(async (resolve,reject)=>{
      
      if(imagen){
        resolve(this.http.put(`${environment.musicproBaseRoute}products/${id}/`,{nom_producto,precio,precio_ofer,imagen,stock,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria},{headers: this.headers}));
      }else{
        resolve( this.http.put(`${environment.musicproBaseRoute}products/${id}/`,{nom_producto,precio,precio_ofer ,stock,desc,color,trastes,mat_cuerpo,mat_neck,mat_fingerb,marca,categoria},{headers: this.headers}));
      }
    })
  }


  getMarcas(): Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}marcas/all/`,{headers: this.headers});
  }

  getCategorias(): Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}categorias/all/`,{headers: this.headers});
  }

  getPrecioDolar():Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}data/`,{headers: this.headers});
  }

  getProductosByCategoria(categoria:string):Observable<any>{
    return this.http.get(`${environment.musicproBaseRoute}products/${categoria}`,{headers: this.headers});
  }
  login({user,passw}):Observable<any>{
    return this.http.post(`${environment.musicproBaseRoute}login/`,{user,passw},{headers: this.headers});
  }

  
}
