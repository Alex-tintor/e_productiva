import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserLoginModule { 
  
  public email:string;

  public password:string;

  constructor(){
    this.email = "";
    this.password = "";
  }

}
