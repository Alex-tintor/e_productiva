import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {CentrosFormacion} from 'src/app/modules/fichas/CentrosFormacion';
import {CentrosFormacionService} from 'src/app/services/centros-formacion.service';

@Component({
  selector: 'app-centros-formacion',
  templateUrl: './centros-formacion.component.html',
  styleUrls: ['./centros-formacion.component.css']
})
export class CentrosFormacionComponent implements OnInit {

  public centros:CentrosFormacion[]
  constructor(private centrosService:CentrosFormacionService) {
    this.centros = centrosService.centros();
   }
   centrosData = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    // coordinador:new FormControl('',[Validators.required,Validators.maxLength(90)]),
    estado:new FormControl('Activo',[Validators.required])
  })

  ngOnInit(): void {
  }

  addCentro(){
    let centro:CentrosFormacion = Object.assign(this.centrosData.value)
    this.centrosService.addCentros(centro)
  }

  show(){
    console.log(this.centrosData.value);
    console.log(this.addCentro());
  }
}


