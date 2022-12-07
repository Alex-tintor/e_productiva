import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';
import { Instructor } from 'src/app/modules/Entidades/Instructores';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {

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

}
