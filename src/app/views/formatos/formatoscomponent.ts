import { Component, OnInit } from '@angular/core';

import { Formato } from 'src/app/modules/Entidades/Formato';
import {FormatoService} from 'src/app/services/FormatoService';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent implements OnInit {

  ngOnInit(): void {
    this.formatoService.getAllFormatos().subscribe(req => this.formatos= req.content)
  }
  public formatos:Formato[]
  constructor(private formatoService:FormatoService){
    this.formatos = formatoService.formatos()
  }

}
