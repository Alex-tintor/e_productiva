import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-data',
  templateUrl: './hijo-data.component.html',
  styleUrls: ['./hijo-data.component.css'],
  template: `<button (click)="sendMessage()">Send Message</button>`,
})
export class HijoDataComponent  {

  nombreActive:boolean=false;
  
  @Output() generalValues = new EventEmitter<boolean>();
  
  constructor() { }
  ngOnInit(): void {
  }
  valueNombre(){
    this.generalValues.emit(this.nombreActive);
  }

}
// implements OnInit