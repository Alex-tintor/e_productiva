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
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    enabled:new FormControl('',[Validators.required])
    });

  centroUpdate = new FormGroup({
    id:new FormControl('',Validators.required),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    enabled:new FormControl('',[Validators.required])
  })

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
    centro.enabled = (this.centrosData.controls.enabled.value == "activo")
    centro.nombre = this.centrosData.controls.nombre.value
    centro.uuid = uuid
    let data = new FormData()
    Object.keys(centro).forEach(key => data.append(key, centro[key]));
    this.centrosService.createCentrosFormacion(data).subscribe(req=>{
      console.log("mensaje respuesta",req)
    })
  }

  public updateCentro(){
    let centro:CentroFormacion|any = new CentroFormacion()
    centro.uuid = this.centroUpdate.controls.id.value
    centro.nombre = this.centroUpdate.controls.nombre.value
    centro.enabled = (this.centroUpdate.controls.enabled.value == "Activo")
    let data = new FormData()
    Object.keys(centro).forEach(key => data.append(key , centro[key]))
    this.centrosService.updateCentrosFormacion(this.centroUpdate.controls.id.value,data).subscribe(req => console.log(req))
  }
  
  public unabledCentro(){
    let id :string|any = this.centrosDelete.controls.uuId.value
    this.centrosService.deleteCentrosFormacion(id).subscribe(req => {console.log(req)})
  }

  public enabled(enabled:boolean):string{
    return  enabled ? "Activo":"Inactivo"
  }
}