import { Component, EventEmitter, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  menuB:boolean=false;

  setMenuBotton(){
    this.menuB = this.menuB? false:true;
  }

  private _Seccion = "";
  @Output() EventSeccion = new EventEmitter();
  public get Seccion(){return this._Seccion}
  public set Seccion(seccion:string){
    this._Seccion = seccion;
    this.EventSeccion.emit(this._Seccion);
    console.log(this._Seccion)
  }

  ngOnInit(): void {}

}