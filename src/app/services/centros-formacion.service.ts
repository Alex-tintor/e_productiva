import { Injectable } from '@angular/core';
import {CentrosFormacion} from 'src/app/modules/Entidades/CentrosFormacion'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentroFormacionDto } from '../modules/Entidades/dtos/CentroFormacionDto';

@Injectable({
  providedIn: 'root'
})
export class CentrosFormacionService {
  
  constructor(private http:HttpClient ) { }
  // aca debe de ir el end point de la apirest
  private url:string="http://localhost:8080/api/centros";
  
  private _centros:CentrosFormacion[]=[];

  public getAllCentrosFormacion():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"20"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getCentrosFormacionById(id:number):Observable<CentrosFormacion>{
    return this.http.get<CentrosFormacion>(this.url+"/"+id);
  }

  public createCentrosFormacion(centro:CentroFormacionDto):Observable<CentrosFormacion>{
    console.log("valor del servicio")
    console.log( centro);
    return this.http.post<CentrosFormacion>(this.url,centro);
  }

  public updateCentrosFormacion(centro:CentrosFormacion):Observable<CentrosFormacion>{
    return this.http.put<CentrosFormacion>(this.url,centro);
  }

  public deleteCentrosFormacion(id:number):Observable<CentrosFormacion>{
    return this.http.delete<CentrosFormacion>(this.url+"/"+id)
  }

  public centros(){
    return this._centros
  }
}
