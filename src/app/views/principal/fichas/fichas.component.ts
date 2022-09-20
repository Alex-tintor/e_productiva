import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Ficha } from 'src/app/modules/fichas/Ficha'
import { FichaService} from 'src/app/services/fichas.service'

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {
  public fichas:Ficha[];
  

  constructor(private fichaService:FichaService) {
    this.fichas = fichaService.fichas();
  }

  fichasData = new FormGroup({
    idFicha:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required]),
    instructorN:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    instructorA:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    centroFormacion:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('Lectiva',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })

  ngOnInit(): void {return}


  addFicha(){
    let numero:any = this.fichasData.controls['idFicha'].value;
    let nombre:any = this.fichasData.controls['nombre'].value;
    let modalidad:any = this.fichasData.controls['modalidad'].value;
    let instructorN:any = this.fichasData.controls['instructorN'].value;
    let instructorA:any = this.fichasData.controls['instructorA'].value;
    let centro:any = this.fichasData.controls['centroFormacion'].value;
    let fechaInicio:any = this.fichasData.controls['fechaInicio'].value;
    let fechaFin:any = this.fichasData.controls['fechaFin'].value;
    let etapa:any = this.fichasData.controls['etapa'].value;
    let estado:any = this.fichasData.controls['estado'].value
    let instructor:any = instructorN + instructorA;
    let ficha = new Ficha(numero,nombre,modalidad,instructor,centro,fechaInicio,fechaFin,etapa,estado);
    this.fichaService.addFicha(ficha)
  }
  show(){
    console.log(this.fichasData.value)
  }
  
}
