import { Injectable } from '@angular/core';
import {CentrosFormacion} from 'src/app/modules/Entidades/CentrosFormacion'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentrosFormacionService {
  
  constructor(private http:HttpClient ) { }
  // aca debe de ir el end point de la apirest
  private url:string="http://localhost:8080/api/centrodeformacion";
  
  private _centros:CentrosFormacion[]=[];

  public getAllCentrosFormacion():Observable<CentrosFormacion[]>{
    return this.http.get<CentrosFormacion[]>(this.url + "/");
  }

  public getCentrosFormacionById(id:number):Observable<CentrosFormacion>{
    return this.http.get<CentrosFormacion>(this.url+"/"+id);
  }

  public createCentrosFormacion(centro:any):Observable<any>{
    return this.http.post<any>(this.url,centro);
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
