import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';

import { Ficha } from 'src/app/modules/Entidades/Ficha'
import { Instructores } from 'src/app/modules/Entidades/Instructores';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { FichaService} from 'src/app/services/fichas.service'
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  public fichas:Ficha[]=[];
  public centros:CentroFormacion[]=[];
  public instructores:Instructores[]=[];

  constructor(private fichaService:FichaService,private centrosService:CentrosFormacionService,private instructoresService:InstructoresService){
    this.fichas = fichaService.fichas();
    this.centros =  centrosService.centros();
    this.instructores = instructoresService.instructor();
  }
  
  ngOnInit(): void {
    this.fichaService.getAllFichas().subscribe(req => this.fichas = req.content);
    
  }
  

  fichasDataCreate = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    programa:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required]),
    instructorCc:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    centro:new FormControl('',[Validators.required,Validators.maxLength(20)]),
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


  
}
// ejecutar repository . save