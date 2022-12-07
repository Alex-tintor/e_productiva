import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';
import { Ficha } from 'src/app/modules/Entidades/Ficha';
import { Instructor } from 'src/app/modules/Entidades/Instructores';
import { Programas } from 'src/app/modules/Entidades/Programas';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { FichaService } from 'src/app/services/fichas.service';
import { InstructoresService } from 'src/app/services/instructores.service';
import { ProgramasService } from 'src/app/services/programas.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-ficha',
  templateUrl: './crete-ficha.component.html',
  styleUrls: ['./crete-ficha.component.css']
})
export class CreteFichaComponent implements OnInit {

  public fichas:Ficha[]=[];
  public centros:CentroFormacion[]=[];
  public instructores:Instructor[]=[];
  public programas:Programas[]=[]

  constructor(private fichaService:FichaService,private centrosService:CentrosFormacionService,private instructoresService:InstructoresService
    ,private programaServide:ProgramasService){
    this.fichas = fichaService.fichas();
    this.centros =  centrosService.centros();
    this.instructores = instructoresService.instructor();

  }
  
  ngOnInit(): void {
    this.fichaService.getAllFichas().subscribe(req => this.fichas = req.content);
    this.centrosService.getAllCentrosFormacion().subscribe(req => this.centros = req.content);
    this.instructoresService.getAllInstructores().subscribe(req => this.instructores = req.content);
    this.programaServide.getAllProgramas().subscribe(req => this.programas = req.content)
  }
  

  fichasDataCreate = new FormGroup({
    programa:new FormControl('',[Validators.required,Validators.maxLength(36)]),
    modalidad:new FormControl('',Validators.required),
    instructorCc:new FormControl('',Validators.required),
    centro:new FormControl('',Validators.required),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    etapa:new FormControl('Lectiva',Validators.required),
    estado:new FormControl('Activo',[Validators.required])
  })

  addFicha(){
    let uuid = v4()
    let ficha:Ficha | any = new Ficha();
    ficha.centroId = this.fichasDataCreate.controls.centro.value;
    ficha.programaId = this.fichasDataCreate.controls.programa.value;
    ficha.etapa = this.fichasDataCreate.controls.etapa.value;
    ficha.fin = this.fichasDataCreate.controls.fechaFin.value;
    ficha.inicio = this.fichasDataCreate.controls.fechaInicio.value;
    ficha.id = uuid;
    ficha.instructor = this.fichasDataCreate.controls.instructorCc.value;
    ficha.modalidad = this.fichasDataCreate.controls.modalidad.value;
    ficha.enabled = (this.fichasDataCreate.controls.estado.value =="Activo");
    let data = new FormData()
    Object.keys(ficha).forEach(key => data.append(key, ficha[key]))
      this.fichaService.createFicha(data).subscribe(req => (console.log(req))) 
  }
}
