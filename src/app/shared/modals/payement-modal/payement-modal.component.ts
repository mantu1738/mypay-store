import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';

@Component({
  selector: 'app-payement-modal',
  templateUrl: './payement-modal.component.html',
  styleUrls: ['./payement-modal.component.scss']
})
export class PayementModalComponent {

  /**
  * Emitted when the user closes the cart.
  * @type {EventEmitter<void>}
  */
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emitted when the user clicks on the pay button.
   * @type {EventEmitter<void>}
   */
  @Output() onPayement: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Represents the total price of the products in the cart.
   * @type {number}
   * @default 0
   */
  @Input() total: number = 0;

  /**
   * Represents an array containing the products in the cart.
   * @type {Product[]}
   * @default []
   * @memberof CartComponent
   */
  @Input() cartItems: Product[] = [];

  /**
   * Close Modal Function
   * @method
   * @returns {void}
   */
  handleModal(): void {
    this.onClose.emit();
  }

  /**
   * close modal
   * @method
   * @returns {void}
   */
  closeModal(): void {
    this.onClose.emit();
  }

  /**
   * Payement Function
   * @method
   * @returns {void}
   */
  pay(): void {
    this.onPayement.emit();
  }
}
