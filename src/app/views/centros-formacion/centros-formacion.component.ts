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

   minimize:boolean=false

   public setMinimize(){
     this.minimize = this.minimize? false:true
     console.log(this.minimize)
   }

   centrosData = new FormGroup({
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
 

  
  public unabledCentro(id:string){
  
    this.centrosService.deleteCentrosFormacion(id).subscribe(req => {
      this.centrosService.getAllCentrosFormacion().subscribe(
        centros => {this.centros = centros.content}
      )
      console.log(req)})
  }

  public enabled(enabled:boolean):string{
    return  enabled ? "Activo":"Inactivo"
  }
}