import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public instructor=[
    {
      nombre: "Rafael nuñez",
      cc:123456789,
      centro_correspondiente:"Servicios financieros",
      modalidad:"presencial",
      estado:"Contratado"
    },
    {
      nombre: "Carolina Martinez",
      cc:98765431,
      centro_correspondiente:"Ni idea",
      modalidad:"virtual",
      estado:"No contratado"
    },
    {
      nombre: "Alejandro Diaz",
      cc:159786423,
      centro_correspondiente:"Centro",
      modalidad:"presencial",
      estado:"No contratado"
    },
    {
      nombre: "Gabriela Torres",
      cc:147852369,
      centro_correspondiente:"El el sena :D",
      modalidad:"virtual",
      estado:"contratado"
    }
  ] 
}
