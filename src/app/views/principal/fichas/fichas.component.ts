import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Ficha } from 'src/app/modules/Entidades/Ficha'
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
  
  ngOnInit(): void {
    this.fichaService.getAllFichas().subscribe(
      fichas=>this.fichas=fichas
    );
  }

  fichasDataCreate = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    programa:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required]),
    instructorCc:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    centro:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('Lectiva',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })
  fichasDataUpdate = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    programa:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required]),
    instructorCc:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    centro:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('Lectiva',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })


  public fichaSelected():void{
    let value:any;
    value = this.fichasDataUpdate.controls['id'].value;
    return value;
  }

  public foundFichas():boolean {
    let id:any = this.fichasDataCreate.controls['id'].value;
    return id.parseInt == this.fichaService.getFichaById(id);
  }
  
  public addFicha():void{
    let ficha:Ficha = Object.assign(this.fichasDataCreate.value)
    if(this.fichasDataCreate.valid && !this.foundFichas() ){
      this.fichaService.createFicha(ficha)
      console.log('ficha creada con exito')
    }
    else{
      console.log('ficha duplicada')
    }
  }
  show(){
    console.log(this.fichaSelected())
    console.log(this.foundFichas());
    console.log(this.fichas)
  }
  
}
