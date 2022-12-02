import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Programas } from '../modules/Entidades/Programas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http:HttpClient) { }

  private _Programa:Programas[]=[]

  private url:string ="http://localhost:8080/api/programas"

  public programas(){
    return this._Programa
  }

  public getAllProgramas():Observable<any>{
    const headers = new HttpHeaders(
      {'page-size':"20",
      'page-number':"0"}
    )
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getProgramasById(id :number):Observable<Programas>{
    return this.http.get<Programas>(this.url + "/id");
  }

  public createProgramas( data:FormData):Observable<Programas>{
    return this.http.post<Programas>(this.url,data);
  }

  public updateProgramas( id:string|any, data:FormData):Observable<Programas>{
    return this.http.put<Programas>(this.url, +"/"+ id + data);
  }

  public deleteProgramas(id:string):Observable<Programas>{
    return this.http.delete<Programas>(this.url + "/" + id);
  }

}
