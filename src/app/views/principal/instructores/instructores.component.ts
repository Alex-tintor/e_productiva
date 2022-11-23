import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Instructor} from 'src/app/modules/Entidades/Instructores';
import {InstructoresService} from 'src/app/services/instructores.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  public instructores : Instructor[];

  constructor(private instructoresService: InstructoresService) {
    this.instructores = instructoresService.instructor()
  }
  ngOnInit(): void {
    this.instructoresService.getAllInstructores().subscribe(
      req => this.instructores = req.content
    );
  }

  instructorData = new FormGroup({
    documento:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    documentoType:new FormControl('CC',[Validators.required]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    centroId:new FormControl<number> (2,[Validators.required,Validators.maxLength(10)]),
    enabled:new FormControl('',[Validators.required])
  })

  addInstructor(){
    let uuid = v4()
    let instructor :Instructor | any = new Instructor()
    instructor.uuId =  uuid;
    instructor.documento = this.instructorData.controls.documento.value
    instructor.nombre = this.instructorData.controls.nombre.value
    instructor.apellido = this.instructorData.controls.apellido.value
    instructor.email = this.instructorData.controls.email.value
    instructor.telefono = this.instructorData.controls.telefono.value
    instructor.enabled = (this.instructorData.controls.enabled.value == "Activo")
    instructor.centro = 2;
    instructor.documentoType = this.instructorData.controls.documentoType.value
   let data = new FormData()
   Object.keys(instructor).forEach(key=> data.append(key,instructor[key]))
    this.instructoresService.createInstructor(data).subscribe(
      req =>{
        console.log(req);
      }
    )
  }
  
  show(){
    let data = new Instructor()
    
    console.log(this.instructoresService.createInstructor)
  }


}
 
