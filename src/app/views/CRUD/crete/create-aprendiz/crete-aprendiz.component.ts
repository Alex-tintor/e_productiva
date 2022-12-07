import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aprendiz } from 'src/app/modules/Entidades/Aprendiz';
import { Ficha } from 'src/app/modules/Entidades/Ficha';
import { AprendicesService } from 'src/app/services/aprendices.service';
import { FichaService } from 'src/app/services/fichas.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-aprendiz',
  templateUrl: './crete-aprendiz.component.html',
  styleUrls: ['./crete-aprendiz.component.css']
})
export class CreteAprendizComponent implements OnInit {

  public aprendices:Aprendiz[];
  public fichas:Ficha[]

  constructor(private aprendizService:AprendicesService,private fichaService:FichaService) { 
    this.aprendices= aprendizService.aprendices()
    this.fichas = fichaService.fichas()
  }
  
  ngOnInit(): void {
    this.aprendizService.getAllAprendices().subscribe(
      req => this.aprendices = req.content
    );
    this.fichaService.getAllFichas().subscribe(
      req => this.fichas = req.content
    )
  }


  aprendizData = new FormGroup({
    documento:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    documentoType:new FormControl('TI',[Validators.required]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    fichaId:new FormControl ('',[Validators.required,Validators.maxLength(36)]),
    etapa: new FormControl('',[Validators.required]),
    enabled:new FormControl('',[Validators.required])
  })

  public addAprendiz(){
    let uuid = v4()
    let aprendiz:Aprendiz | any = new Aprendiz ()
    aprendiz.uuId = uuid
    aprendiz.documento = this.aprendizData.controls.documento.value
    aprendiz.documentoType = this.aprendizData.controls.documentoType.value
    aprendiz.nombre = this.aprendizData.controls.nombre.value
    aprendiz.apellido = this.aprendizData.controls.apellido.value
    aprendiz.email = this.aprendizData.controls.email.value
    aprendiz.telefono = this.aprendizData.controls.telefono.value
    aprendiz.fichaId = this.aprendizData.controls.fichaId.value
    aprendiz.etapa = this.aprendizData.controls.etapa.value
    aprendiz.enabled = (this.aprendizData.controls.enabled.value == "Activo")
    let data = new FormData()
    Object.keys(aprendiz).forEach(key => data.append(key, aprendiz[key]))
      this.aprendizService.createAprendiz(data).subscribe(req =>{
        console.log(req)
      } )
  }
}
