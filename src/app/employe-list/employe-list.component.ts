import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  Display() {
    var fnm = (<HTMLInputElement>document.getElementById("fname")).value;
    var lnm = (<HTMLInputElement>document.getElementById("lname")).value;
    var email = (<HTMLInputElement>document.getElementById("mail")).value;
    var PhNo = (<HTMLInputElement>document.getElementById("phone")).value
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fnm == "") {
      alert(" Please Enter First Name")
    }
    else if (lnm == "") {
      alert("Please Enter Last Name")
    }
    else if (email == "") {
      alert("Please Enter Your Email")
    }
    else if (PhNo == "") {
      alert("Please Enter Phone Number")
    }

    else {
      location.reload()
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
