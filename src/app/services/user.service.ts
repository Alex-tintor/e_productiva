import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/Entidades/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string ="http://localhost:8080/api/user";
  constructor(private htpp:HttpClient) {}

  login(form:User){
    return this.htpp.post(this.url,form);
  }
}
