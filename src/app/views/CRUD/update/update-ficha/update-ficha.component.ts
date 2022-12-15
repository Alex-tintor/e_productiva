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

@Component({
  selector: 'app-update-ficha',
  templateUrl: './update-ficha.component.html',
  styleUrls: ['./update-ficha.component.css']
})
export class UpdateFichaComponent implements OnInit {

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

  fichasUpdate = new FormGroup({
    id:new FormControl('',[Validators.required]),
    programa:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required]),
    instructorCc:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    centro:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('Lectiva',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })

  public updateFicha(){
    let ficha:Ficha|any = new Ficha()
    ficha.centroId = this.fichasUpdate.controls.centro.value;
    ficha.programaId = this.fichasUpdate.controls.programa.value;
    ficha.etapa = this.fichasUpdate.controls.etapa.value;
    ficha.fin = this.fichasUpdate.controls.fechaFin.value;
    ficha.inicio = this.fichasUpdate.controls.fechaInicio.value;
    ficha.id = this.fichasUpdate.controls.id.value
    ficha.instructor = this.fichasUpdate.controls.instructorCc.value;
    ficha.modalidad = this.fichasUpdate.controls.modalidad.value;
    ficha.enabled = (this.fichasUpdate.controls.estado.value =="Activo");
    let data = new FormData()
    Object.keys(ficha).forEach(key=> data.append(key,ficha[key]));
    this.fichaService.updateFicha(this.fichasUpdate.controls.id.value,data).subscribe(req => {console.log(req)})
  }

}
