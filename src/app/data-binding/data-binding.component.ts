import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  // firstname = 'Nazim';
  // Lastname = 'Chishti';
  atg = 'techguru'

  var2 = 'this is weekly meet'

  // var1 = 'This Is Angular 9 Presentation';
  // isDisable = true;

  // Display() {
  //   alert("Nazim Chishti")
  // }
  bgcolor = 'blue'
  Show() {
    alert("Welcome")
  }

  // color = 'blue'

  // name = ''
  // display() {
  //   console.log(this.name)
  // }
  // Show() {
  //   console.log(this.name)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
