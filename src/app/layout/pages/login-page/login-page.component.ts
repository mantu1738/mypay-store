import { Component, OnInit } from '@angular/core';

import { LoginService } from '@shared/services/login.service';
import { userService } from '@shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLogged: boolean = false;
  errorMessages: string = '';

  constructor(private loginService: LoginService, private userService: userService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.isLogged) {
      this.router.navigateByUrl('/');
      this.isLogged = this.userService.isLogged();
    }
  }




  login() {
    this.loginService.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.userService.setToken(r.token);
            this.router.navigateByUrl('/');
          }
        },
        r => {
          this.errorMessages = r.error.message;
        });

    console.log(this.errorMessages, this.isLogged);
  }



}
