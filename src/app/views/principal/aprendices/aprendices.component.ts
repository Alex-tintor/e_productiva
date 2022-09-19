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
    etapa:new FormControl('',[Validators.required]),
    estado:new FormControl('Activo',[Validators.required])
  })

  ngOnInit(): void {
  }
  
  addAprendiz(){
    let cc:any = this.aprendizData.controls['cc'].value;
    let nombre:any = this.aprendizData.controls['nombre'].value;
    let apellido:any = this.aprendizData.controls['apellido'].value;
    let ficha:any = this.aprendizData.controls['ficha'].value;
    let etapa:any = this.aprendizData.controls['etapa'].value;
    let estado:any = this.aprendizData.controls['estado'].value;
    let centro = new Aprendices(cc,nombre,apellido,ficha,etapa,estado);
    this.aprendizService.addAprendiz(centro)
  }

  show(){
    console.log(this.aprendizData.value)
  }

}
