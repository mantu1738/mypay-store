import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  /**
    * Text to be displayed on the button.
    * @default 'Click me'
    */
  @Input() buttonText: string = 'Click me';

  /**
   * Type of the button (e.g., 'button', 'submit', 'reset').
   * @default 'button'
   */
  @Input() buttonType: string = 'button';

  /**
   * Event emitted when the button is clicked.
   */
  @Output() onClick = new EventEmitter<void>();

  /**
   * Handles the click event and emits the onClick event.
   */
  handleClick(): void {
    this.onClick.emit();
  }
}

