import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros-formacion',
  templateUrl: './centros-formacion.component.html',
  styleUrls: ['./centros-formacion.component.css']
})
export class CentrosFormacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public centros=[
    {
      nombre: "Servicios financieros",
      direccion:"K78",
      regional:"Bogota ",
      coordinador:"Hector lavoe :D",
      instrucor_s:"Diana  perez"
    },
    {
      nombre: "Sena Hotel",
      direccion:"K78",
      regional:"Bogota",
      coordinador:"Pepito Perez",
      instrucor_s:"En formacion"
    },
    {
      nombre: "Comunicacion Grafica",
      direccion:"K78",
      regional:"Bogota",
      coordinador:"juanito",
      instrucor_s:"marianita"
    },
    {
      nombre: "Sena oculto",
      direccion:"KR79",
      regional:"Bogota",
      coordinador:"juanito",
      instrucor_s:"marianita"
    }
  ] 
}
