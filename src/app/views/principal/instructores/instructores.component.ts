import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Instructores} from 'src/app/modules/Entidades/Instructores';
import {InstructoresService} from 'src/app/services/instructores.service';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  public instructores : Instructores[];

  constructor(private instructoresService: InstructoresService) {
    this.instructores = instructoresService.instructor()
  }
  ngOnInit(): void {
    this.instructoresService.getAllInstructores().subscribe(
      instructor => this.instructores = instructor
    );
  }

  instructorData = new FormGroup({
    cc:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    centro:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })

  addInstructor(){
    let instructor:Instructores = Object.assign(this.instructorData.value)
    this.instructoresService.createInstructor(instructor)
  }
  
  show(){
    console.log(this.instructorData.value)
  }
}
