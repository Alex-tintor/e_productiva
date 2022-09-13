import { Component, OnInit } from '@angular/core';
import { Ficha } from 'src/app/modules/fichas/Ficha'
import { FichaService} from 'src/app/services/fichas.service'

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  public nombre:string="";
  public numero:number=0;
  public centro:string="";
  public etapa:string="";
  public estado:boolean=true;

  public fichas:Ficha[];

  constructor(private fichaService:FichaService) {
    this.fichas = fichaService.fichas();
  }
  ngOnInit(): void {return}

  addFicha(){
    let ficha = new Ficha(this.nombre,this.numero,this.centro,this.etapa,this.estado);
    this.fichaService.addFicha(ficha)
  }
  
}
