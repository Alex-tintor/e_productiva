import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/Entidades/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string ="http://localhost:8080/api/login";
  constructor(private htpp:HttpClient) {}

  login(data:FormData){
    return this.htpp.post(this.url,data);
  }
}
