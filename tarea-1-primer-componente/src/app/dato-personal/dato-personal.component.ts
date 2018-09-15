import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dato-personal',
  templateUrl: './dato-personal.component.html',
  styleUrls: ['./dato-personal.component.css']
})
export class DatoPersonalComponent implements OnInit {

  constructor() { }
    @Input() nombreDato;
  ngOnInit() {
  }

}
