import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {return}

  addFicha(){
    let ficha = new Ficha('Programa XXX',12312312,'oliwis','durmiente',false);
    this.fichaService.addFicha(ficha)
  }
}
