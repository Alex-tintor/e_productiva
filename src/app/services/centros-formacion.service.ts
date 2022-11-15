import { Injectable } from '@angular/core';
import {CentroFormacion} from 'src/app/modules/Entidades/CentroFormacion'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentrosFormacionService {
  
  constructor(private http:HttpClient ) { }
  // aca debe de ir el end point de la apirest
  private url:string="http://localhost:8080/api/centros";
  
  private _centros:CentroFormacion[]=[];

  public getAllCentrosFormacion():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"20"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getCentrosFormacionById(id:number):Observable<CentroFormacion>{
    return this.http.get<CentroFormacion>(this.url+"/"+id);
  }

  public createCentrosFormacion(data:FormData):Observable<CentroFormacion>{
    return this.http.post<CentroFormacion>(this.url,data);
  }

  public updateCentrosFormacion(centro:CentroFormacion):Observable<CentroFormacion>{
    return this.http.put<CentroFormacion>(this.url,centro);
  }

  public deleteCentrosFormacion(id:number):Observable<CentroFormacion>{
    return this.http.delete<CentroFormacion>(this.url+"/"+id)
  }

  public centros(){
    return this._centros
  }
}
