import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {}

  private _Seccion = "";
  public get Seccion(){return this._Seccion}

  seccionValue(seccion:string){
    this._Seccion = seccion;
  }
}
