import { Component, OnInit } from '@angular/core';

import { Encuestas } from 'src/app/modules/Entidades/Encuestas';
import {EncuestasService} from 'src/app/services/encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  constructor(private encuestasService:EncuestasService) { 
    this.encuestas = encuestasService.encuesta()
  }

  public encuestas:Encuestas[];

  ngOnInit(): void {
  }

  addEncuestas(){
    let encuesta = new Encuestas("claro","78kjl67j8","Jose Jose", 1239842,"joseJose@claro.com.co");
    this.encuestas.push(encuesta)
  }

}
