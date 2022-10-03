import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-in-angular',
  templateUrl: './pipe-in-angular.component.html',
  styleUrls: ['./pipe-in-angular.component.css']
})
export class PipeInAngularComponent implements OnInit {

  constructor() { }
  //Built - int - pipe
  name = "Nazim";
  //Parametrized Pipe
  salary = 50000
  //Chaining Pipe
  DOB = '01/05/2001'
  ngOnInit(): void {
  }

}
