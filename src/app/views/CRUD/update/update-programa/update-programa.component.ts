import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Programas } from 'src/app/modules/Entidades/Programas';
import { ProgramasService } from 'src/app/services/programas.service';

@Component({
  selector: 'app-update-programa',
  templateUrl: './update-programa.component.html',
  styleUrls: ['./update-programa.component.css']
})
export class UpdateProgramaComponent implements OnInit {

  public programas : Programas[]

  constructor(private progrmaService:ProgramasService) {
    this.programas = progrmaService.programas()
   }

  ngOnInit(): void {
    this.progrmaService.getAllProgramas().subscribe(req => this.programas = req.content);
  }

  programaData = new FormGroup({
    id:new FormControl("",Validators.required),
    nombre: new FormControl('',[Validators.required,Validators.maxLength(75)]),
    nivel:new FormControl('',Validators.required),
    enabled:new FormControl('',Validators.required)
  })

  
  public addPrograma(){
    let programa:Programas | any = new Programas()
    programa.id = this.programaData.controls.id.value;
    programa.nombre = this.programaData.controls.nombre.value
    programa.nivel = this.programaData.controls.nivel.value
    programa.enabled = (this.programaData.controls.enabled.value == "Activo")
    let data = new FormData()
    Object.keys(programa).forEach(key => data.append(key, programa[key]) );
    this.progrmaService.updateProgramas(this.programaData.controls.id.value,data).subscribe(
      req => console.log(req)
    )
  }

}
