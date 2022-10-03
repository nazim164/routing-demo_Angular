import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-in-angular',
  templateUrl: './form-in-angular.component.html',
  styleUrls: ['./form-in-angular.component.css']
})
export class FormInAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  LoginUser(SigninForm: NgForm) {
    console.log(SigninForm);
    console.log("My First Name Is :", SigninForm.value.fName)
    console.log("My Last Name Is :", SigninForm.value.lName)
    console.log("This Is My Email Address :", SigninForm.value.EmailAddress);
    console.log(SigninForm.value.Password);
    console.log(SigninForm.value.Terms);
  }
}
