import { Injectable } from '@angular/core';
import {FichasComponent} from '../views/principal/fichas/fichas.component';

@Injectable({
  providedIn: 'root'
})
export class FichasService {

  // public fichas=[
  //   {
  //     nombre: "ADSI",
  //     n_ficha:2233518,
  //     centro_correspondiente:"Servicios financieros",
  //     etapa:"productiva",
  //     estado:"En formacion"
  //   },
  //   {
  //     nombre: "Tecnico en programación",
  //     n_ficha:2233497,
  //     centro_correspondiente:"Ni idea",
  //     etapa:"productiva",
  //     estado:"En formacion"
  //   },
  //   {
  //     nombre: "Tecnico en redes",
  //     n_ficha:4458799,
  //     centro_correspondiente:"Centro",
  //     etapa:"Lectiva",
  //     estado:"desertado"
  //   },
  //   {
  //     nombre: "Tecnico en mantenimiento",
  //     n_ficha:3164887,
  //     centro_correspondiente:"El el sena :D",
  //     etapa:"Lectiva",
  //     estado:"desertado"
  //   }
  // ] 
  
  constructor() { }
}
