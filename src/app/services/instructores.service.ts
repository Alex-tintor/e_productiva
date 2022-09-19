import { Injectable } from '@angular/core';
import {Instructores} from 'src/app/modules/fichas/Instructores'

@Injectable({
  providedIn: 'root'
})
export class InstructoresService {

  constructor() { this.loadInstructores()}

  private _instructor:Instructores[]=[]

  public instructor(){
    return this._instructor
  }

  public instructorById(id:number){
    return  this._instructor.filter(Instructores => Instructores.cc == id)
  }

  
  public addInstructor(instructor:Instructores){
    this._instructor.push(instructor);
  }

  public loadInstructores(){
    let instructorTemp0 = new Instructores(1234532,"Jose ", "Ovalle Rodriguez","jeovalle@misena.edu.co",43209128,"Cenigraf",true);
    this._instructor.push(instructorTemp0);
    let instructorTemp1 = new Instructores(1234532,"anres ", "Ovalle montecarlo","daniel@dasda.edu.co",123423523412,"ceet",true);
    this._instructor.push(instructorTemp1);
    let instructorTemp2 = new Instructores(1234532,"Jose ", "Ovalle Rodriguez","jeovalle@misena.edu.co",43209128,"Cenigraf",true);
    this._instructor.push(instructorTemp2);
    let instructorTemp3 = new Instructores(1234532,"pipe ", "Ovalle diaz","diaz@misena.edu.co",67856,"Cenigraf",true);
    this._instructor.push(instructorTemp3);
  }
}
