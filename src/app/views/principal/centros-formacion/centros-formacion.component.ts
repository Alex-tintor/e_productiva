import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import {CentroFormacion} from 'src/app/modules/Entidades/CentroFormacion';
import {CentrosFormacionService} from 'src/app/services/centros-formacion.service';
import { v4 } from 'uuid';

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
    enabled:new FormControl('',[Validators.required])
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
    let uuid = v4()
    let centro:CentroFormacion | any = new CentroFormacion()
     if(this.centrosData.controls.enabled.value == "activo"){
      centro.enabled = true
     }
     else{
      centro.enabled=  false
     }
    centro.nombre = this.centrosData.controls.nombre.value
    centro.uuid = uuid
    let data = new FormData()
    Object.keys(centro).forEach(key => data.append(key, centro[key]));
    this.centrosService.createCentrosFormacion(data).subscribe(req=>{
      console.log("mensaje respuesta",req)
    })
  }

}