import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Instructor} from 'src/app/modules/Entidades/Instructores'

@Injectable({
  providedIn: 'root'
})
export class InstructoresService {

  constructor(private http:HttpClient) {}

  private _instructor:Instructor[]=[];

  private url:string ="http://localhost:8080/api/instructores";

  public instructor(){
    return this._instructor
  }
  
  public getAllInstructores():Observable<any>{
    const headers = new HttpHeaders({
      'page-number':"0",
      'page-size':"20"
    })
    return this.http.get<any>(this.url,{headers:headers});
  }

  public getInstructorById(id :number):Observable <Instructor>{
    return this.http.get<Instructor>(this.url + "/id");
  }

  public createInstructor(data:FormData):Observable<Instructor>{
    return this.http.post<Instructor>(this.url , data)
  }

  public updateInstructor(instructor :Instructor):Observable<Instructor>{
    return this.http.put<Instructor>(this.url + "/", instructor)
  }

  public deleteInstructor(id : number):Observable<Instructor>{
    return this.http.delete<Instructor>(this.url + "/")
  }

}
