import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css']
})
export class AprendicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public aprendices=[
    {
      nombre: "alexis ramirez cicedo",
      cc:678454563,
      ficha_correspondiente:2394657,
      etapa:"productiva",
      estado:"desertado"
    },
    {
      nombre: "juan ramirez lara",
      cc:45643645,
      ficha_correspondiente:2394657,
      etapa:"productiva",
      estado:"contratado/sedido"
    },
    {
      nombre: "sebastian hernesto sepulveda lopez",
      cc:1578634,
      ficha_correspondiente:2394657,
      etapa:"productiva",
      estado:"en espera"
    },
    {
      nombre: "dalien hernesto forigua",
      cc:23457621,
      ficha_correspondiente:2394657,
      etapa:"productiva",
      estado:"contratado"
    }
  ] 

}
