import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Instructores} from 'src/app/modules/fichas/Instructores';
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

  instructorData = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    instructorN:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    instructorA:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    centroFormacion:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('Activo',[Validators.required])
  })

  ngOnInit(): void {return}

  addFicha(){
    let id:any = this.instructorData.controls['id'].value;
    let instructorN:any = this.instructorData.controls['instructorN'].value;
    let instructorA:any = this.instructorData.controls['instructorA'].value;
    let email:any = this.instructorData.controls['email'].value;
    let phone:any = this.instructorData.controls['phone'].value;
    let centro:any = this.instructorData.controls['centroFormacion'].value;
    let estado:any = this.instructorData.controls['estado'].value;
    let instructor = new Instructores(id,instructorN,instructorA,email,phone,centro,estado);
    this.instructoresService.addInstructor(instructor)
  }
  
  show(){
    console.log(this.instructorData.value)
  }
}
