import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Aprendiz} from 'src/app/modules/Entidades/Aprendiz';

@Injectable({
  providedIn: 'root'
})
export class AprendicesService {

  constructor(private http:HttpClient ) { 
  }

  private url:string="http://localhost:8080/api/aprendices"

  private _aprendiz: Aprendiz[] =[];

  public aprendices(){
    return this._aprendiz
  }

  public getAllAprendices():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"2"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getAprendizById(id :number):Observable<Aprendiz>{
    return this.http.get<Aprendiz>(this.url + "/id");
  }

  public createAprendiz( data:FormData):Observable<Aprendiz>{
    return this.http.post<Aprendiz>(this.url,data);
  }

  public updateAprendiz( id:string|any,data:FormData):Observable<Aprendiz>{
    return this.http.put<Aprendiz>(this.url+"/"+id,data);
  }

  public deleteAprendiz(id:string):Observable<Aprendiz>{
    return this.http.delete<Aprendiz>(this.url + "/"+id);
  }

}
