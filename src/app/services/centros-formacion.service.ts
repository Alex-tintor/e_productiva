import { Injectable } from '@angular/core';
import {CentrosFormacion} from 'src/app/modules/fichas/CentrosFormacion'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentrosFormacionService {

  // aca debe de ir el end point de la apirest
  private url:string="http://localhost:8080/api/v1/centrodeformacion";

  constructor(private http:HttpClient ) { }

  getAllCentrosFormacion():Observable<CentrosFormacion[]>{
    return this.http.get<CentrosFormacion[ ]>(this.url);
  }

  getCentrosFormacionById(id:number):Observable<CentrosFormacion>{
    return this.http.get<CentrosFormacion>(this.url+"/"+id);
  }

  createCentrosFormacion(centro:CentrosFormacion):Observable<CentrosFormacion>{
    return this.http.post<CentrosFormacion>(this.url,centro);
  }

  updateCentrosFormacion(centro:CentrosFormacion):Observable<CentrosFormacion>{
    return this.http.put<CentrosFormacion>(this.url,centro);
  }

  deleteCentrosFormacion(id:number):Observable<CentrosFormacion>{
    return this.http.delete<CentrosFormacion>(this.url+"/"+id)
  }

  private _centros:CentrosFormacion[]=[];

  public centros(){
    return this._centros
  }

  public centrosById(id:string){
    return this._centros.filter(CentrosFormacion => CentrosFormacion.id==id)
  }

  public addCentros(centros:CentrosFormacion){
    this._centros.push(centros)
  }

  public loadCentros(){
    let centrosTemp0 = new CentrosFormacion("1j23k12j","cenigraf",/*"willirex"*/true);
    this._centros.push(centrosTemp0);
    let centrosTemp1 = new CentrosFormacion("1j23k12j","cenigraf"/*,"8cho"*/ ,true);
    this._centros.push(centrosTemp1);
    let centrosTemp2 = new CentrosFormacion("1j23k12j","cenigraf"/*,"vegetta" */,true);
    this._centros.push(centrosTemp2);
    let centrosTemp3 = new CentrosFormacion("1j23k12j","cenigraf"/*,"natalan" */,true);
    this._centros.push(centrosTemp3);
    let centrosTemp4 = new CentrosFormacion("1j23k12j","cenigraf"/*,"missa"*/ ,true);
    this._centros.push(centrosTemp4);
    let centrosTemp5 = new CentrosFormacion("1j23k12j","cenigraf"/*,"50cent"*/ ,true);
    this._centros.push(centrosTemp5);
  }
}
