import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public loginForm:FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
    })
  }

  ngOnInit(): void {return}

  public onSubmmit(){}

    
  }