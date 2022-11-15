import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {CentroFormacion} from 'src/app/modules/Entidades/CentroFormacion';
import { CentroFormacionDto } from 'src/app/modules/Entidades/dtos/CentroFormacionDto';
import {CentrosFormacionService} from 'src/app/services/centros-formacion.service';

@Component({
  selector: 'app-centros-formacion',
  templateUrl: './centros-formacion.component.html',
  styleUrls: ['./centros-formacion.component.css']
})
export class CentrosFormacionComponent implements OnInit {

  public centros:CentroFormacion[];

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
    let centro:CentroFormacion | any = new CentroFormacion()
    centro.enable = true
    centro.nombre = "Pedro Navajas"
    centro.uuid = "eebe92b5-ebf0-4863-8ac8-c431c5a707b4"
    let data = new FormData()
    Object.keys(centro).forEach(key => data.append(key, centro[key]));
    data.append("nombre",centro.nombre)
    data.append("uuid",centro.uuid)
    data.append("enable",String(centro.enabled))
    this.centrosService.createCentrosFormacion(data).subscribe(req=>{
      console.log("mensaje respuesta",req)
    })
  }

}