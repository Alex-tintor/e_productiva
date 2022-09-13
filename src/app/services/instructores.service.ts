import { Injectable } from '@angular/core';
import {Instructores} from 'src/app/modules/fichas/Instructores'

@Injectable({
  providedIn: 'root'
})
export class InstructoresService {

  constructor() { }

  private _instructor:Instructores[]=[]

  public instructor(){
    return this._instructor
  }

  public instructorById(id:number){
    return  this._instructor.filter(Instructores => Instructores.cc == id)
  }

  public loadInstructores(){
    let instructorTemp = new Instructores(1234532,"Jose ", "Ovalle Rodriguez","jeovalle@misena.edu.co",43209128,"Cenigraf",true);
    this._instructor.push(instructorTemp);
  }
}
