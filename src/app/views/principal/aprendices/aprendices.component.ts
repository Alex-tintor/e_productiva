import { Component, OnInit } from '@angular/core';

import {Aprendices} from 'src/app/modules/fichas/aprendices';
import {AprendicesService} from "src/app/services/aprendices.service";

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css']
})
export class AprendicesComponent implements OnInit {

  public aprendices:Aprendices[];

  constructor(private aprendizService:AprendicesService) { 
    this.aprendices= aprendizService.aprendices()
  }

  ngOnInit(): void {
  }
  
  addAprendiz(){
    let aprendiz = new Aprendices("alexander",317284738,35434,"practica","contratado");

    this.aprendizService.addAprendiz(aprendiz)
  }

}
