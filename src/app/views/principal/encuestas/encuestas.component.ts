import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  constructor() { }

  public empresas=[
    {
      nombre: "teleperformance",
      id:2210923,
      representante:"jhon alex castanno",
      telefono:"3234578901",
      correo:"yosoyJhon04@teleperformance.com.co"
    },
    {
      nombre: "Claro",
      id:765345234,
      representante:"vicente fernandez",
      telefono:"3232572901",
      correo:"Chente@claro.com.co"
    },
    {
      nombre: "bancolombia",
      id:121123543,
      representante:"alvaro urive velez",
      telefono:"3104578901",
      correo:"soyParaquito23@bancoC.com.co"
    },
    {
      nombre: "microsoft",
      id:777765345,
      representante:"steve jobs",
      telefono:"257491023",
      correo:"steveJobsOficial@outlook.com"
    },
  ] 

  ngOnInit(): void {
  }

}
