import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentroFormacion } from 'src/app/modules/Entidades/CentroFormacion';
import { CentrosFormacionService } from 'src/app/services/centros-formacion.service';

@Component({
  selector: 'app-update-centro',
  templateUrl: './update-centro.component.html',
  styleUrls: ['./update-centro.component.css']
})
export class UpdateCentroComponent implements OnInit {

  public centros:CentroFormacion[];

  constructor(private centrosService:CentrosFormacionService) {
    this.centros = centrosService.centros();
   }

   ngOnInit(): void {
    this.centrosService.getAllCentrosFormacion().subscribe(
      req => this.centros = req.content
    );
  }
  centroUpdate = new FormGroup({
    id:new FormControl('',Validators.required),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(85)]),
    enabled:new FormControl('',[Validators.required])
  })

  public updateCentro(){
    let centro:CentroFormacion|any = new CentroFormacion()
    centro.uuid = this.centroUpdate.controls.id.value
    centro.nombre = this.centroUpdate.controls.nombre.value
    centro.enabled = (this.centroUpdate.controls.enabled.value == "Activo")
    let data = new FormData()
    Object.keys(centro).forEach(key => data.append(key , centro[key]))
    this.centrosService.updateCentrosFormacion(this.centroUpdate.controls.id.value,data).subscribe(req => console.log(req))
  }
  
}
