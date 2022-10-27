import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentrosFormacion } from 'src/app/modules/Entidades/CentrosFormacion';

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

  public fichas:Ficha[];
  public centros:CentrosFormacion[];
  public instructores:Instructores[];
  
  constructor(private centroService:CentrosFormacionService,private fichaService:FichaService,private instructorService:InstructoresService ) {
    this.fichas = fichaService.fichas();
    this.centros = centroService.centros();
    this.instructores = instructorService.instructor();
  }
  
  ngOnInit(): void {
    this.fichaService.getAllFichas().subscribe(req => this.fichas = req.content);
    this.centroService.getAllCentrosFormacion().subscribe(centros=>this.centros=centros);
    this.instructorService.getAllInstructores().subscribe(instructores=>this.instructores =instructores)
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
      this.fichaService.createFicha(ficha)
      console.log('ficha creada con exito')
  }
  show(){
    // console.log(this.fichaSelected())
    // console.log(this.foundFichas());
    // console.log(this.fichas)
  }
  
}
// ejecutar repository . save