import { Component, OnInit } from '@angular/core';

<<<<<<< Updated upstream
import { FichasService } from '../../../services/fichas.service'

=======
>>>>>>> Stashed changes
@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
  
  
=======
  addFichas(){
    this.fichas.push(
    )
    console.log('ficha agregada')
  } 

  public fichas=[
    {
      nombre: "ADSI",
      n_ficha:2233518,
      centro_correspondiente:"Servicios financieros",
      etapa:"productiva",
      estado:"En formacion"
    },
    {
      nombre: "Tecnico en programación",
      n_ficha:2233497,
      centro_correspondiente:"Ni idea",
      etapa:"productiva",
      estado:"En formacion"
    },
    {
      nombre: "Tecnico en redes",
      n_ficha:4458799,
      centro_correspondiente:"Centro",
      etapa:"Lectiva",
      estado:"desertado"
    },
    {
      nombre: "Tecnico en mantenimiento",
      n_ficha:3164887,
      centro_correspondiente:"El el sena :D",
      etapa:"Lectiva",
      estado:"desertado"
    }
  ] 
>>>>>>> Stashed changes
}
