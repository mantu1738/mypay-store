import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  template: `<div [ngStyle]="{'display': !isSnackbarOpen ? 'none':'flex'}" class="snackbar">
              <span [ngStyle]="{ 'color': 'green' }" >{{ message }}</span>
            </div>`,
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  /**
   * Represents the message to be displayed in the snackbar.
   * @type {string}
   * @default ''
   * @memberof SnackbarComponent
   */
  @Input() message: string = '';

  /**
   * Represents the state of the snackbar.
   * @type {boolean}
   * @default false
   * @memberof SnackbarComponent
   */
  @Input() isSnackbarOpen: boolean = false;

}
