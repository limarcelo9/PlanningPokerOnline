
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user='';
  public password='';

  constructor() { }

  ngOnInit(): void {
  }


  onAuthenticate(){
    console.log(this.user);
    console.log(this.password)
  }
}
