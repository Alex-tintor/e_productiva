import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficha } from 'src/app/modules/Entidades/Ficha'

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  constructor(private http:HttpClient){}
  
  private _fichas:Ficha[]=[];

  private url:string="http://localhost:8080/api/fichas";

  public fichas(){
    return this._fichas;
  }

  public getAllFichas():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"3"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getFichaById(id:number):Observable<Ficha>{
    return this.http.get<Ficha>(this.url + "/id");
  }

  public createFicha(ficha:Ficha):Observable<Ficha>{
    return this.http.post<Ficha>(this.url,ficha);
  }

  public updateFicha(ficha:Ficha):Observable<Ficha>{
    return this.http.put<Ficha>(this.url+"/",ficha);
  }

  public deleteFicha(id:number):Observable<Ficha>{
    return this.http.delete<Ficha>(this.url + "/id");
  }

  // public loadFichas(){
  //   let ficha1 = new Ficha(2141342,'precencial','2022-10-30','10/09/2021',true);
  //   let ficha2 = new Ficha(212445634,'precencial','10/09/2021','10/09/2021',true);
  //   this._fichas.push(ficha1);
  //   this._fichas.push(ficha2);
  // }

}