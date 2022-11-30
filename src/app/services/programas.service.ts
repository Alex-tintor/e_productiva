import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programas } from '../modules/Entidades/Programas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http:HttpClient) { }

private url:string ="http://localhost:8080/api/programas"

  private _Programa:Programas[]=[]

  public programas(){
    return this._Programa
  }

  public getAllProgramas():Observable<any>{
    const headers = new HttpHeaders(
      {'page-size':"20",
      'page-number':"0"}
    )
    return this.http.get<Programas>(this.url,{headers:headers})
  }

  public getProgramasById(id :number):Observable<Programas>{
    return this.http.get<Programas>(this.url + "/id");
  }

  public createProgramas( data:FormData):Observable<Programas>{
    return this.http.post<Programas>(this.url,data);
  }

  public updateProgramas( Programas :Programas):Observable<Programas>{
    return this.http.put<Programas>(this.url, Programas);
  }

  public deleteProgramas(id:number):Observable<Programas>{
    return this.http.delete<Programas>(this.url + "/id");
  }

}
