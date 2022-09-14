import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { Ficha } from 'src/app/modules/fichas/Ficha'
import { FichaService} from 'src/app/services/fichas.service'

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {
  public fichas:Ficha[];

  constructor(private fichaService:FichaService) {
    this.fichas = fichaService.fichas();
  }

  fichasData = new FormGroup({
    idFicha:new FormControl(0,[Validators.required,Validators.maxLength(10)]),
    nombre:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    modalidad:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    instructorN:new FormControl('jose jose',[Validators.required,Validators.maxLength(45)]),
    instructorA:new FormControl('arollo Diaz ',[Validators.required,Validators.maxLength(45)]),
    centroFormacion:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaInicio:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    fechaFin:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    estado:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {return}

  addFicha(){
    let numero = this.fichasData.controls['idFicha'].value;
    let nombre = this.fichasData.controls['nombre'].value;
    let modalidad = this.fichasData.controls['modalidad'].value;
    let instructorN = this.fichasData.controls['instructorN'].value;
    let instructorA = this.fichasData.controls['instructorA'].value;
    let centro = this.fichasData.controls['centroFormacion'].value;
    let fechaInicio = this.fichasData.controls['fechaInicio'].value;
    let fechaFin = this.fichasData.controls['fechaFin'].value;
    let etapa = this.fichasData.controls['etapa'].value;
    let estado = this.fichasData.controls['estado'].value
    let ficha = new Ficha(numero,nombre,modalidad,instructorN+instructorA,centro,fechaInicio,fechaFin,etapa,estado);
    this.fichaService.addFicha(ficha)
  }
  show(){
    console.log(this.addFicha())
  }
  
}
