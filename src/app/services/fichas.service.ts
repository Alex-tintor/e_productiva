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
    return this._fichas.filter(ficha => ficha.id == id);
  }

  public addFicha(ficha:Ficha){
    this._fichas.push(ficha);
  }

  public loadFichas(){
    let ficha1 = new Ficha(2141342,'precencial','2022-10-30','10/09/2021',true);
    let ficha2 = new Ficha(212445634,'precencial','10/09/2021','10/09/2021',true);
    this._fichas.push(ficha1);
    this._fichas.push(ficha2);
  }

}