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
  /**
   * The username entered by the user.
   * @type {string}
   */
  username: string = '';

  /**
   * The password entered by the user.
   * @type {string}
   */
  password: string = '';

  /**
   * Indicates whether the user is logged in.
   * @type {boolean}
   */
  isLogged: boolean = false;

  /**
   * Error messages to be displayed in case of login failure.
   * @type {string}
   */
  message: string = '';

  /**
   * Indicates whether the error is of type 401 (Unauthorized).
   */
  errorType: boolean = false;

  /**
   * Indicates whether the snackbar is open.
   * @type {boolean}
   */
  isSnackbarOpen: boolean = false;

  /**
 * Creates an instance of LoginPageComponent.
 * @constructor
 * @param {LoginService} loginService - The service responsible for handling login operations.
 * @param {UserService} userService - The service responsible for managing user-related data.
 * @param {Router} router - The Angular router service for navigation.
 */
  constructor(private loginService: LoginService, private userService: userService, private router: Router) { }

  /**
  * Lifecycle hook called after the component has been initialized.
  * If the user is already logged in, navigates to the home page.
  * Subscribes to the `loggedIn$` observable from the `userService` to update the `isLogged` property.
  * @method
  * @returns {void}
  */
  ngOnInit(): void {
    this.userService.loggedIn$.subscribe(loggedIn => {
      this.isLogged = loggedIn;

      // If user is logged in, navigate to the home page
      if (this.isLogged) {
        this.router.navigateByUrl('/');
      }
    });
  }

  /**
  * Initiates the login process using the provided username and password.
  * If successful, sets the user token and navigates to the home page.
  * If unsuccessful, displays error messages.
  * @method
  * @returns {void}
  */
  login(): void {
    this.loginService.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.userService.setToken(r.token);
            this.userService.setUsername(this.username);
            this.router.navigateByUrl('/');
          }
        },
        r => {
          this.message = "Invalid username or password.";
          this.isSnackbarOpen = true;
          this.errorType = true;
          setTimeout(() => {
            this.isSnackbarOpen = false;
          }, 3000);
        });
  }
}
