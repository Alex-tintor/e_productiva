import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-data',
  templateUrl: './prueba-data.component.html',
  styleUrls: ['./prueba-data.component.css'],
  template:`Message:<app-child (messageEvent)="receiveMessage($event)"></app-child>`,
})
export class PruebaDataComponent  {

  constructor() { }

  nombreActive:boolean=false;
  
  getNombreActive($event:boolean){
    this.nombreActive = $event
    console.log('todo nice bb si te sirvio')
  }

  ngOnInit(): void {
  }

}
// implements OnInit
