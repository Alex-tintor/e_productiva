import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { CentroInterface } from 'src/app/interfaces/CentroInterface';

import {CentrosFormacion} from 'src/app/modules/Entidades/CentrosFormacion';
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
    const form = document.getElementById("centroData");
    let centroForm = new FormData(form);
    let centro:CentrosFormacion  = new CentrosFormacion(0,centroForm.get(nombre),centroForm.get(enabled))
    this.centrosService.createCentrosFormacion(centro).subscribe(rec=>{
      console.log(rec)
    })
  }

  
}


