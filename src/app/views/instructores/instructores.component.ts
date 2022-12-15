import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';

import {Instructor} from 'src/app/modules/Entidades/Instructores';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import {InstructoresService} from 'src/app/services/instructores.service';
import { v4, validate } from 'uuid';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  public instructores : Instructor[];
  public centros:CentroFormacion[];

  constructor(private instructoresService: InstructoresService,private centroService:CentrosFormacionService) {
    this.instructores = instructoresService.instructor()
    this.centros = centroService.centros()
  }
  ngOnInit(): void {
    this.instructoresService.getAllInstructores().subscribe(
      req => this.instructores = req.content
    );
    this.centroService.getAllCentrosFormacion().subscribe(
      req => this.centros = req.content
    )
  }

  minimize:boolean=false

  public setMinimize(){
    this.minimize = this.minimize? false:true
    console.log(this.minimize)
  }

  unableInstructor(documento:string){
    this.instructoresService.deleteInstructor(documento).subscribe(req => 
      {this.instructoresService.getAllInstructores().subscribe(
        req => this.instructores = req.content)})
  }

}
 
