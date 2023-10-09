import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from '@app/shared/services/signup.service';
import { userService } from '@app/shared/services/user.service';

// Custom validator to check if password and confirm password match
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {
  /**
   * Represents the signup form.
   * @type {FormGroup}
   * @memberof SignupComponent
   * @see {@link https://angular.io/api/forms/FormGroup|FormGroup}
   */
  signupForm: FormGroup;

  /**
   * Represents the state of the user.
   * @type {boolean}
   * @memberof SignupComponent
   */
  isLogged: boolean = false;

  /**
   * Represents the message to be displayed in the snackbar.
   * @type {string}
   * @memberof SignupComponent
   */
  message: string = '';

  /**
   * Represents the state of the snackbar.
   * @type {boolean}
   * @memberof SignupComponent
   */
  isSnackbarOpen: boolean = false;

  /**
   * @constructor
   * @param formBuilder Creates a form group instance from a config object. 
   * @param signupService Creates a signup service instance. 
   * @param router Creates a router instance.
   * @param userService Creates a user service instance. 
   */
  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private router: Router, private userService: userService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: passwordMatchValidator });
  }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Subscribes to the user service to get the state of the user.
   * @method
   * @returns {void}
   * @memberof SignupComponent
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
   * Submits the signup form.
   * @method
   * @returns {void}
   */
  onSubmit(): void {
    if (this.signupForm.valid) {
      this.signupService.signup(this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.email).subscribe(
        response => {
          if (response) {
            this.message = 'User created successfully';
            this.isSnackbarOpen = true;
            setTimeout(() => {
              this.router.navigateByUrl('/login');
            }, 2500);
          }
        },
        error => {
          if (error) {
            this.message = 'SomeThing went wrong!!!';
            this.isSnackbarOpen = true;
          }
        }
      );
    }
  }
}
