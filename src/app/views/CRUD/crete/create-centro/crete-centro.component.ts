import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-centro',
  templateUrl: './crete-centro.component.html',
  styleUrls: ['./crete-centro.component.css']
})
export class CreteCentroComponent implements OnInit {

  public centros:CentroFormacion[];

  constructor(private centrosService:CentrosFormacionService) {
    this.centros = centrosService.centros();
   }

   ngOnInit(): void {
    this.centrosService.getAllCentrosFormacion().subscribe(
      req => this.centros = req.content
    );
  }

   centrosData = new FormGroup({
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    enabled:new FormControl('',[Validators.required])
    });

 

    addCentro(){
      let uuid = v4()
      let centro:CentroFormacion | any = new CentroFormacion()
      centro.enabled = (this.centrosData.controls.enabled.value == "Activo")
      centro.nombre = this.centrosData.controls.nombre.value
      centro.uuid = uuid
      let data = new FormData()
      Object.keys(centro).forEach(key => data.append(key, centro[key]));
      this.centrosService.createCentrosFormacion(data).subscribe(req=>{
        console.log("mensaje respuesta",req)
      })
    }



}
