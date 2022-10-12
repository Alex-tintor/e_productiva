import { Injectable } from '@angular/core';
import {Encuestas} from 'src/app/modules/Entidades/Encuestas'

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  constructor() { this.loadEncuesstas()}
  private _encuestas:Encuestas[]=[]

  public encuesta(){
    return this._encuestas
  }
  
  public encuestasById(id:string){
    return this._encuestas.filter(Encuestas => Encuestas.id==id)
  }

  public addEncuestas(encuestas:Encuestas){
    this._encuestas.push(encuestas)
  }

  public loadEncuesstas(){
    let encuestasTemp0 = new Encuestas("Teleperformace","1jk23j12h","Manuel Turizo",3232885670,"manuelTurizo24@teleperformance.com");
    this._encuestas.push(encuestasTemp0);
    let encuestasTemp1 = new Encuestas("Teleperformace","1jk23j12h","Manuel Turizo",3232885670,"manuelTurizo24@teleperformance.com");
    this._encuestas.push(encuestasTemp1);
    let encuestasTemp2 = new Encuestas("Teleperformace","1jk23j12h","Manuel Turizo",3232885670,"manuelTurizo24@teleperformance.com");
    this._encuestas.push(encuestasTemp2);
    let encuestasTemp3 = new Encuestas("Teleperformace","1jk23j12h","Manuel Turizo",3232885670,"manuelTurizo24@teleperformance.com");
    this._encuestas.push(encuestasTemp3);
    let encuestasTemp4 = new Encuestas("Teleperformace","1jk23j12h","Manuel Turizo",3232885670,"manuelTurizo24@teleperformance.com");
    this._encuestas.push(encuestasTemp4);
  }
}
