import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.reactiveForm = formbuilder.group({
      emailadd: ['', Validators.required],
      Password: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
    })
  }
  ReactiveValue() {
    console.log(this.reactiveForm)
  }
  ngOnInit(): void {
  }

}
