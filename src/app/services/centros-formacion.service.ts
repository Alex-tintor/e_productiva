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
    let centrosTemp0 = new CentrosFormacion("a1dw56da32s1","Centro de electricidad,electronica y telecomunicaciones","avenida 30 #1","bogota distrito capital","juan prieto",8520);
    this._centros.push(centrosTemp0);
    let centrosTemp1 = new CentrosFormacion("879dwqd56a","cenigraf","avenida 30 #1","bogota distrito capital","juan prieto",2200);
    this._centros.push(centrosTemp1);
    let centrosTemp2 = new CentrosFormacion("4jk5g64jh","Centro de Hoteleria","avenida 30 #1","bogota distrito capital","juan prieto",159);
    this._centros.push(centrosTemp2);
    let centrosTemp3 = new CentrosFormacion("15xz6cs","Centro Agropecuario","avenida 30 #1","bogota distrito capital","juan prieto",3695);
    this._centros.push(centrosTemp3);
    let centrosTemp4 = new CentrosFormacion("15hj6k41","Centro de electricidad,electronica y telecomunicaciones","avenida 30 #1","bogota distrito capital","juan prieto",1596);
    this._centros.push(centrosTemp4);
    let centrosTemp5 = new CentrosFormacion("1c9v19bc51","Centro de electricidad,electronica y telecomunicaciones","avenida 30 #1","bogota distrito capital","juan prieto",2245);
    this._centros.push(centrosTemp5);
  }
}
