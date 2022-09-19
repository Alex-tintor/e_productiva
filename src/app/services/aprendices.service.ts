import { Injectable } from '@angular/core';
import {Aprendices} from 'src/app/modules/fichas/Aprendices'

@Injectable({
  providedIn: 'root'
})
export class AprendicesService {

  constructor() { 
    this.loadAprendiz();
  }

  private _aprendiz: Aprendices[] =[];

  public aprendices(){
    return this._aprendiz
  }

  public aprendicesById(id:number){
    return this._aprendiz.filter(Aprendices => Aprendices.cc == id)
  }

  public addAprendiz(aprendiz:Aprendices){
    this._aprendiz.push(aprendiz)
  }

  public loadAprendiz(){
    let aprendizTemp0 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp1 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp2 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp3 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp4 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp5 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    let aprendizTemp6 = new Aprendices(1016944420,"alexis ","Morales",2394657,"productiva","contratado");
    this._aprendiz.push(aprendizTemp0);
    this._aprendiz.push(aprendizTemp1);
    this._aprendiz.push(aprendizTemp2);
    this._aprendiz.push(aprendizTemp3);
    this._aprendiz.push(aprendizTemp4);
    this._aprendiz.push(aprendizTemp5);
    this._aprendiz.push(aprendizTemp6);


  }
}
