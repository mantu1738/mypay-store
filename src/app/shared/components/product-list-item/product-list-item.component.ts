import { Component, Input } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { CartService } from '@app/shared/services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  /**
   * The product to be displayed.
   * @default {} as Product
   */
  @Input() product: Product = {} as Product;
  /**
   * The path to the route.
   * @default ''
   * @example '/products'
   */
  @Input() routePath: string = '';

  /**
   * @constructor
   * Creates an instance of ProductListItemComponent.
   * @param CartService - The service for managing the shopping cart.
   */
  constructor(private CartService: CartService) { }

  /**
   * Adds the current product to the shopping cart.
   * @param productId - The ID of the product to be added to the cart.
   * @method
   * @returns {void}
   */
  addToCart(productId: number): void {
    this.CartService.addToCartByProductId(productId)
      .subscribe();
  }
}
