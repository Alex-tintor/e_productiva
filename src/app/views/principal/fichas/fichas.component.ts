import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    nombre:new FormControl('',[Validators.required,Validators.maxLength(255)]),
    idFicha:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    centroFormacion:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    etapa:new FormControl('',[Validators.required,Validators.maxLength(10)])
  })

  ngOnInit(): void {return}

  // addFicha(){
  //   let ficha = new Ficha(this.nombre,this.numero,this.centro,this.etapa,this.estado);
  //   this.fichaService.addFicha(ficha)
  // }
  
}
