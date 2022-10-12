import { HttpClient } from '@angular/common/http';
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

  public loadAprendices(res:string){
    console.log(res)
  }

  public getAllAprendices():Observable<Aprendiz[]>{
    return this.http.get<Aprendiz[]>(this.url);
  }

  public getAprendizById(id :number):Observable<Aprendiz>{
    return this.http.get<Aprendiz>(this.url + "/id");
  }

  public createAprendiz( aprendiz :Aprendiz):Observable<Aprendiz>{
    return this.http.post<Aprendiz>(this.url, aprendiz);
  }

  public updateAprendiz( aprendiz :Aprendiz):Observable<Aprendiz>{
    return this.http.put<Aprendiz>(this.url, aprendiz);
  }

  public deleteAprendiz(id:number):Observable<Aprendiz>{
    return this.http.delete<Aprendiz>(this.url + "/id");
  }

}
