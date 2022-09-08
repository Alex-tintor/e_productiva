import { Component, OnInit } from '@angular/core';

import {CentrosFormacion} from 'src/app/modules/fichas/CentrosFormacion';
import {CentrosFormacionService} from 'src/app/services/centros-formacion.service';

@Component({
  selector: 'app-centros-formacion',
  templateUrl: './centros-formacion.component.html',
  styleUrls: ['./centros-formacion.component.css']
})
export class CentrosFormacionComponent implements OnInit {

  public centros:CentrosFormacion[]
  constructor(private centrosService:CentrosFormacionService) {
    this.centros = centrosService.centros();
   }

  ngOnInit(): void {
  }
  addCentro(){
    let centro = new CentrosFormacion("as21dfa3s","Cenigraf","cra30#1","bogota distrito capital","marwuin",1268);
    this.centros.push(centro);
  }
}
