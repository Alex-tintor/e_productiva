import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { min } from 'rxjs';

import {Aprendiz} from 'src/app/modules/Entidades/Aprendiz';
import { Ficha } from 'src/app/modules/Entidades/Ficha';
import {AprendicesService} from "src/app/services/aprendices.service";
import { FichaService } from 'src/app/services/fichas.service';
import { v4, validate } from 'uuid';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css']
})
export class AprendicesComponent implements OnInit {

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

  minimize:boolean=false

  public setMinimize(){
    this.minimize = this.minimize? false:true
    console.log(this.minimize)
  }

  public unableAprendiz(documento:string){
    this.aprendizService.deleteAprendiz(documento).subscribe(req => {
        this.aprendizService.getAllAprendices().subscribe(aprendices =>{
           this.aprendices = aprendices.content
           console.log(req)
          })
    })
  }

}