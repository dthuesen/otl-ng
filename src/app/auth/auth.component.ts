import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = {};
  
  constructor(
    public af: AngularFire,
    // public email: string,
    // public password: string,
    ) {
      this.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.user = user;
        }
        else {
          // user not logged in
          this.user = {};
        }
      });
    }
    
  
  
  login() {
    this.af.auth.login();
  }
  overrideLogin() {
    this.af.auth.login({
      email: 'dthuesen@gmx.de',
      password: 'roller',
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    })
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit() {
  }

}
