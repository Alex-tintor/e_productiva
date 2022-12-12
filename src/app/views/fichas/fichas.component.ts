import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';

import { Ficha } from 'src/app/modules/Entidades/Ficha'
import { Instructor } from 'src/app/modules/Entidades/Instructores';
import { Programas } from 'src/app/modules/Entidades/Programas';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { FichaService} from 'src/app/services/fichas.service'
import { InstructoresService } from 'src/app/services/instructores.service';
import { ProgramasService } from 'src/app/services/programas.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

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
  

  fichasDelete = new FormGroup({
    nameId : new FormControl('',Validators.required)
  })

  minimize:boolean=false

  public setMinimize(){
    this.minimize = this.minimize? false:true
    console.log(this.minimize)
  }



  public unabled(id:string){
    this.fichaService.deleteFicha(id).subscribe(req => {
      this.fichaService.getAllFichas().subscribe(
        fichas => {this.fichas = fichas.content}
      )
      console.log(req)})
  }

  
}
