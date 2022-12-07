import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formato } from 'src/app/modules/Entidades/Formato';
import { FormatoService } from 'src/app/services/FormatoService';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-formato',
  templateUrl: './crete-formato.component.html',
  styleUrls: ['./crete-formato.component.css']
})
export class CreteFormatoComponent implements OnInit {

  ngOnInit(): void {
    this.formatoService.getAllFormatos().subscribe(req => this.formatos= req.content)
  }
  public formatos:Formato[]
  constructor(private formatoService:FormatoService){
    this.formatos = formatoService.formatos()
  }

  public formatoData = new FormGroup({
    instructor: new FormControl('',Validators.required),
    fecha:new FormControl('',[Validators.required,Validators.maxLength(11)])
  })

  public addFormato(){
    let uuid =v4
    let formato :Formato|any = new Formato()
    formato.id = uuid
    formato.instructor = this.formatoData.controls.instructor.value
    formato.fecha = this.formatoData.controls.fecha.value
    let data = new FormData()
    Object.keys(formato).forEach(key => data.append(key, formato[key]))
    this.formatoService.createFormato(data).subscribe(req => {console.log(req)})
  }
  

}
