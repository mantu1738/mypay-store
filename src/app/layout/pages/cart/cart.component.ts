import { Component, OnInit } from '@angular/core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '@app/shared/services/cart.service';
import { ModalService } from '@app/shared/services/modal.service';
import { Product } from '@app/data/interfaces/products.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  /**
   * Represents an array containing the products in the shopping cart.
   * @type {Product[]}
   */
  cartItems: Product[] = [];

  /**
   * Represents the Font Awesome icon for the shopping cart.
   * @type {any}
   */
  cartIcon: any = faShoppingCart;

  /**
   * Represents the state of the modal.
   * @type {boolean}
   */
  modalState: boolean = false;

  /**
   * Represents the state of the snackbar.
   * @type {boolean}
   */
  isSnackbarOpen: boolean = false;

  /**
   * Represents the message to be displayed in the snackbar.
   * @type {string}
   */
  message: string = '';


  /**
   * Creates an instance of CartComponent.
   * @constructor
   * @param {CartService} cartService - The service responsible for managing the shopping cart.
   */
  constructor(private cartService: CartService, private modalService: ModalService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches the products in the cart from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  /**
   * Adds a product to the shopping cart by its product ID.
   * @method
   * @param {number} productId - The unique identifier of the product to be added.
   */
  addToCart(productId: number) {
    this.cartService.addToCartByProductId(productId);
    console.log(this.cartItems);
  }

  /**
   * Deletes a product from the shopping cart by its product ID.
   * @method
   * @param {number} productId - The unique identifier of the product to be deleted.
   * @returns {void}
   */
  deleteItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  /**
   * Calculates and returns the total amount of the items in the shopping cart.
   * @type {number}
   */
  get totalCartAmount(): number {
    let totalAmount = 0;
    this.cartItems.forEach(item => {
      totalAmount += item.price * (item.quantity ? item.quantity : 1);
    });
    return totalAmount;
  }

  /**
   * Opens the modal.
   * @method
   * @returns {void}
   */
  openModal(): void {
    this.modalService.openModal();
    this.modalState = this.modalService.ModalState;
  }

  /**
   * Closes the modal.
   * @method
   * @returns {void}
   */
  closeModal(): void {
    this.modalService.closeModal();
    this.modalState = this.modalService.ModalState;
  }

  /**
   * Clears the shopping cart.
   * @method
   * @returns {void}
   */
  payNow(): void {
    this.modalService.closeModal();
    this.modalState = this.modalService.ModalState;
    this.message = "Your order has been placed successfully!!!";
    this.isSnackbarOpen = true;
    this.cartService.clearCart();
    this.cartItems = [];
    setTimeout(() => {
      this.isSnackbarOpen = false;
    }, 2000);
  }

}
