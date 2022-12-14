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

  instructorData = new FormGroup({
    documento:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    documentoType:new FormControl('CC',[Validators.required]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    centroId:new FormControl ('',[Validators.required,Validators.maxLength(36)]),
    enabled:new FormControl('',[Validators.required])
  })

  updateInstructorData = new FormGroup({
    documento:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    documentoType:new FormControl('CC',[Validators.required]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    centroId:new FormControl ('',[Validators.required,Validators.maxLength(36)]),
    enabled:new FormControl('',[Validators.required])
  })

  instructorDelete = new FormGroup({
    documento: new FormControl('',Validators.required)
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
    instructor.centro = this.instructorData.controls.centroId.value;
    instructor.documentoType = this.instructorData.controls.documentoType.value
   let data = new FormData()
   Object.keys(instructor).forEach(key=> data.append(key,instructor[key]))
    this.instructoresService.createInstructor(data).subscribe(
      req =>{
        console.log(req);
      }
    )
  }

  public updateInstructor(){
    let instructor:Instructor|any= new  Instructor()
    // instructor.uuId =  uuid;
    instructor.documento = this.updateInstructorData.controls.documento.value
    instructor.nombre = this.updateInstructorData.controls.nombre.value
    instructor.apellido = this.updateInstructorData.controls.apellido.value
    instructor.email = this.updateInstructorData.controls.email.value
    instructor.telefono = this.updateInstructorData.controls.telefono.value
    instructor.enabled = (this.updateInstructorData.controls.enabled.value == "Activo")
    instructor.centro = this.updateInstructorData.controls.centroId.value;
    instructor.documentoType = this.updateInstructorData.controls.documentoType.value
   let data = new FormData()
   Object.keys(instructor).forEach(key=> data.append(key,instructor[key]))
   this.instructoresService.updateInstructor( this.updateInstructorData.controls.documento.value,data).subscribe(req => {console.log(req)})
  }

  unableInstructor(){
    let documento:string | any = this.instructorDelete.controls.documento.value
    this.instructoresService.deleteInstructor(documento).subscribe(req => console.log(req))
  }

}
 
