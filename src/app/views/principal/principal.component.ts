import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/modules/Entidades/User';
import { UserLoginModule } from 'src/app/modules/Entidades/user-login/user-login.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public loginForm:FormGroup;
  public isLoading:boolean = false;
  public loginFailed = false;

  constructor( private userService:UserService ) {
    this.loginForm = new FormGroup({
      user: new FormControl('',[Validators.required,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(25)]),
    })
  }
  ngOnInit(): void {
    return
  }

  public isInvalid(control:string):boolean{
    return this.loginForm.controls[control].invalid && ( this.loginForm.controls[control].dirty || this.loginForm.controls[control].touched)
  }

  public getErrors(control:string):string{
    switch(control){
      case 'email':
        return this.getErrorsByControl(control,"Ingresa Correo del Sena o Empresarial","No es un Correo Valido");
      case 'password':
        return this.getErrorsByControl(control,"Contraseña suministrada por Administracion","Debe ser mayor a 8 digitos y menor a 16");
      default:
        return "Ha ocurrido algo insesperado"
    }
  }

  public isFormValid():boolean{
    return this.loginForm.valid;
  }

  private getErrorsByControl(control:string,defecto:string,errores:string):any{
    if(this.isInvalid(control))
      return errores
    return defecto;
  }

  public onSubmmit(){
    if(this.isFormValid()){
      this.isLoading = true;
      this.loginForm.disable()
      this.loginFailed = false;
      //Esta Linea se cambia por la Promesa de logeo login.subscribe(()=>{ // exito de loging},()=>{//fallo de login})
      let login : UserLoginModule | any = new UserLoginModule();
      login.email = this.loginForm.controls['user'].value
      login.password = this.loginForm.controls['password'].value
      let data = new FormData()
      Object.keys(login).forEach(key => data.append(key,login[key]))
      this.userService.login(data).subscribe(req =>{if(req == "Credenciales Validas"){
        console.log("se puede redireccionar")
      }})
      new Promise(resolve => setTimeout(resolve,10*1000)).then(()=>{
        //si fue exitoso redirecciona
        
        //si fallo
        this.loginForm.enable()
        this.isLoading=false;
        this.loginFailed=true;
      })
      return;
    }
    this.loginFailed = true;
  }

  public onLogin(form :User){
    let login : UserLoginModule | any = new UserLoginModule();
    login.email = this.loginForm.controls['user'].value
    login.password = this.loginForm.controls['password'].value
    let data = new FormData()
    Object.keys(login).forEach(key => data.append(key,login[key]))
    this.userService.login(data).subscribe()
  }

}