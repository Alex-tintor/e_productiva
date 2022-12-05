import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Formato} from 'src/app/modules/Entidades/Formato'

@Injectable({
  providedIn: 'root'
})
export class FormatoService {

  constructor(private http:HttpClient){}

  private url:string = "http://localhost:8080/api/seguimientos";

  private _formato : Formato[] = [];

  public formatos(){
    return this._formato;
  }

  public getAllFormatos():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"20"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

}
