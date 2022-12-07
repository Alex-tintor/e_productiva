import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';
import { Instructor } from 'src/app/modules/Entidades/Instructores';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { InstructoresService } from 'src/app/services/instructores.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-instructor',
  templateUrl: './crete-instructor.component.html',
  styleUrls: ['./crete-instructor.component.css']
})
export class CreteInstructorComponent implements OnInit {

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


}
