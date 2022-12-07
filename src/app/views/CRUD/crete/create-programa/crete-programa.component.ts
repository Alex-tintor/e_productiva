import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Programas } from 'src/app/modules/Entidades/Programas';
import { ProgramasService } from 'src/app/services/programas.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-programa',
  templateUrl: './crete-programa.component.html',
  styleUrls: ['./crete-programa.component.css']
})
export class CreteProgramaComponent implements OnInit {

  public programas : Programas[]

  constructor(private progrmaService:ProgramasService) {
    this.programas = progrmaService.programas()
   }

  ngOnInit(): void {
    this.progrmaService.getAllProgramas().subscribe(req => this.programas = req.content);
  }

  programaData = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.maxLength(75)]),
    enabled:new FormControl('',Validators.required)
  })

  
  public addPrograma(){
    let uuid = v4()
    let programa:Programas | any = new Programas()
    programa.id = uuid;
    programa.nombre = this.programaData.controls.nombre.value
    programa.enabled = (this.programaData.controls.enabled.value == "Activo")
    let data = new FormData()
    Object.keys(programa).forEach(key => data.append(key, programa[key]) );
    this.progrmaService.createProgramas(data).subscribe(
      req => console.log(req)
    )
  }
}
