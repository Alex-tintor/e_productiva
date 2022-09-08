import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  constructor() {return}

  ngOnInit(): void {return}
  public instructores=[
    {
      nombre: "Rafael",
      cc:123456789,
      centro:"Servicios financieros",
      apellido: "nuñez",
      telefono: "3262256654",
      modalidad:"presencial",
      estado:"Contratado",
      correo:"rafale@gmail.com"
    },
    {
      nombre: "Carolina ",
      cc:98765431,
      centro:"Ni idea",
      apellido: "Martinez",
      telefono: "3262234223",
      modalidad:"virtual",
      estado:"No contratado",
      correo:"carolina@gmail.com"
    },
    {
      nombre: "Alejandro",
      cc:159786423,
      centro:"Centro",
      apellido: "Diaz",
      telefono: "3262234224",
      modalidad:"presencial",
      estado:"No contratado",
      correo:"alejandro@gmail.com"
    },
    {
      nombre: "Gabriela",
      cc:147852369,
      centro:"El el sena :D",
      apellido: "Torres",
      telefono: "3262223434",
      modalidad:"virtual",
      estado:"contratado",
      correo:"gabriela@gmail.com"
    }
  ] 
}
