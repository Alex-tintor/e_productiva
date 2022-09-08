import { Injectable } from '@angular/core';
import { Ficha } from 'src/app/modules/fichas/Ficha'

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  constructor(){
    this.loadFichas();
  }

  private _fichas:Ficha[] = []

  public fichas(){
    return this._fichas;
  }

  public fichaById(id:number){
    return this._fichas.filter(ficha => ficha.numero == id);
  }

  public addFicha(ficha:Ficha){
    this._fichas.push(ficha);
  }

  public loadFichas(){
    let ficha1 = new Ficha('programa A',123,'CEET','PRACTICA',true);
    let ficha2 = new Ficha('programa B',124,'CEET','PRACTICA',false);
    this._fichas.push(ficha1)
    this._fichas.push(ficha2)
  }

}