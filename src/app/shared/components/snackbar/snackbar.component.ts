import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  template: `<div [ngStyle]="{'display': !isSnackbarOpen ? 'none':'flex'}" class="snackbar">
              <span [ngStyle]="{ 'color': 'green' }" >{{ message }}</span>
            </div>`,
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  @Input() message: string = '';
  @Input() isSnackbarOpen: boolean = false;

}
