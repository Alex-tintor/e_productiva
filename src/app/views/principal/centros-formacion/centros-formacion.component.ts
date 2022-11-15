import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

import {CentrosFormacion} from 'src/app/modules/Entidades/CentrosFormacion';
import { CentroFormacionDto } from 'src/app/modules/Entidades/dtos/CentroFormacionDto';
import {CentrosFormacionService} from 'src/app/services/centros-formacion.service';

@Component({
  selector: 'app-centros-formacion',
  templateUrl: './centros-formacion.component.html',
  styleUrls: ['./centros-formacion.component.css']
})
export class CentrosFormacionComponent implements OnInit {

  public centros:CentrosFormacion[];

  constructor(private centrosService:CentrosFormacionService) {
    this.centros = centrosService.centros();
   }

   centrosData = new FormGroup({
    uuid:new FormControl(""),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    enabled:new FormControl<boolean>(false,[Validators.required])
  });

  centrosDelete = new FormGroup({
    uuId:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.centrosService.getAllCentrosFormacion().subscribe(
      req => this.centros = req.content
    );
  }
 
  

  addCentro(){
    let centro :CentrosFormacion = new CentrosFormacion()
    centro.enabled = true
    centro.nombre = "asdas"
    centro.uuid = "5as34hj5g6"
    let dto : CentroFormacionDto = new CentroFormacionDto()
    dto.enabled = centro.enabled
    dto.nombre = centro.nombre
    dto.uuid = centro.uuid
    console.log( centro);
    console.log(dto)
    this.centrosService.createCentrosFormacion(dto).subscribe(rec=>{
      console.log(rec)
    })
  }

  
}


