import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Aprendices} from 'src/app/modules/fichas/Aprendices';
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

  aprendizData = new FormGroup({
    cc:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    ficha:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    etapa:new FormControl('Lectiva',[Validators.required]),
    estado:new FormControl('Activo',[Validators.required])
  })

  ngOnInit(): void {
  }
  
  addAprendiz(){
    let aprendiz:Aprendices = Object.assign(this.aprendizData.value);
    this.aprendizService.addAprendiz(aprendiz)
  }

  show(){
    console.log(this.aprendizData.value)
  }

}
