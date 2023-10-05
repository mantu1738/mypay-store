// cart-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@app/data/interfaces/products.interface';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {
  /**
   * The product to be displayed.
   * @default {} as Product
   */
  @Input() product: Product = {} as Product;

  /**
   * Event emitted when the product is clicked.
   * @type {EventEmitter<number>}
   */
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Event emitted when the "Add to Cart" button is clicked.
   * @type {EventEmitter<number>}
   */
  @Output() addtoCart: EventEmitter<number> = new EventEmitter<number>();

  /**
   * FontAwesome icon for the delete action.
   */
  deleteIcon = faTrashCan;

  /**
   * Handles the click event on the product.
   * @param {number} productId - The ID of the clicked product.
   */
  handleClick(productId: number): void {
    this.onClick.emit(productId);
  }

  /**
   * Handles the "Add to Cart" action for the product.
   * @param {number} productId - The ID of the product to be added to the cart.
   */
  handleAddToCart(productId: number) {
    this.addtoCart.emit(productId);
  }
}
