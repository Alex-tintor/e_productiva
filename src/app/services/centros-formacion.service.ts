import { Injectable } from '@angular/core';
import {CentrosFormacion} from 'src/app/modules/fichas/CentrosFormacion'

@Injectable({
  providedIn: 'root'
})
export class CentrosFormacionService {

  constructor() { this.loadCentros()}

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
    let centrosTemp0 = new CentrosFormacion("1j23k12j","cenigraf","willirex" ,true);
    this._centros.push(centrosTemp0);
    let centrosTemp1 = new CentrosFormacion("1j23k12j","cenigraf","8cho" ,true);
    this._centros.push(centrosTemp1);
    let centrosTemp2 = new CentrosFormacion("1j23k12j","cenigraf","vegetta" ,true);
    this._centros.push(centrosTemp2);
    let centrosTemp3 = new CentrosFormacion("1j23k12j","cenigraf","natalan" ,true);
    this._centros.push(centrosTemp3);
    let centrosTemp4 = new CentrosFormacion("1j23k12j","cenigraf","missa" ,true);
    this._centros.push(centrosTemp4);
    let centrosTemp5 = new CentrosFormacion("1j23k12j","cenigraf","50cent" ,true);
    this._centros.push(centrosTemp5);
  }
}
