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
      req => this.instructores = req.content
    );
  }

  instructorData = new FormGroup({
    documento:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    documentoType:new FormControl('',[Validators.required]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    centroId:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    enabled:new FormControl(true,[Validators.required])
  })

  addInstructor(){
    let instructor:Instructores = Object.assign(this.instructorData.value)
    // let data :FormData = new FormData()
    // data.append('documento',Blob.arguments(this.instructorData.value.documento));
    // console.log(data.getAll)
    this.instructoresService.createInstructor(instructor).subscribe(
      req =>{
        console.log(req);
      }
    )
  }
  
  show(){
    console.log(this.instructoresService.createInstructor)
  }


}
 
