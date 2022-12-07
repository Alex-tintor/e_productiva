import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formato } from 'src/app/modules/Entidades/Formato';
import { FormatoService } from 'src/app/services/FormatoService';

@Component({
  selector: 'app-update-formato',
  templateUrl: './update-formato.component.html',
  styleUrls: ['./update-formato.component.css']
})
export class UpdateFormatoComponent implements OnInit {

  ngOnInit(): void {
    this.formatoService.getAllFormatos().subscribe(req => this.formatos= req.content)
  }
  public formatos:Formato[]
  constructor(private formatoService:FormatoService){
    this.formatos = formatoService.formatos()
  }

  public formatoUpdate = new FormGroup({
    id:new FormControl('',Validators.required),
    instructor:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    fecha:new FormControl('',[Validators.required,Validators.maxLength(11)])
  })

  public updateFormato(){
    let formato:Formato|any= new Formato()
    formato.id = this.formatoUpdate.controls.id.value
    formato.instructor = this.formatoUpdate.controls.instructor.value
    formato.fecha = this.formatoUpdate.controls.fecha.value
    let data = new FormData()
    Object.keys(formato).forEach(key => data.append(key,formato[key]))
  }

}
