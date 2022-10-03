import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  Display() {
    var fnm = (<HTMLInputElement>document.getElementById("fname")).value;
    var email = (<HTMLInputElement>document.getElementById("mail")).value;
    var password = (<HTMLInputElement>document.getElementById("pass")).value
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fnm == "") {
      alert(" Please Enter Username")
    }
    else if (email == "") {
      alert("Please Enter Your Email")
    }


    else if (password == "") {
      alert("Please Enter Password")
    }

    else {
      location.reload()
    }
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
