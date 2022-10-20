import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Instructores} from 'src/app/modules/Entidades/Instructores'

@Injectable({
  providedIn: 'root'
})
export class InstructoresService {

  constructor(private http:HttpClient) {}

  private _instructor:Instructores[]=[];

  private url:string ="http://localhost:8080/api/instructores";

  public instructor(){
    return this._instructor
  }
  
  public getAllInstructores():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"5"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getInstructorById(id :number):Observable <Instructores>{
    return this.http.get<Instructores>(this.url + "/id");
  }

  public createInstructor(instructor:Instructores):Observable<Instructores>{
    return this.http.post<Instructores>(this.url , instructor)
  }

  public updateInstructor(instructor :Instructores):Observable<Instructores>{
    return this.http.put<Instructores>(this.url + "/", instructor)
  }

  public deleteInstructor(id : number):Observable<Instructores>{
    return this.http.delete<Instructores>(this.url + "/")
  }

}
