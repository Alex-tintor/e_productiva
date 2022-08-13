import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Input() InputType:string="";
  @Input() Titlle:string="";
  @Input() Placeholder:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
