import { Component, OnInit } from '@angular/core';

import { CartService } from '@app/shared/services/cart.service';
import { Product } from '@app/data/interfaces/products.interface';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  cartIcon: any = faShoppingCart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);

  }

  addToCart(productId: number) {
    this.cartService.addToCartByProductId(productId);
  }

  deleteItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  get totalCartAmount() {
    let totalAmount = 0;
    this.cartItems.forEach(item => {
      totalAmount += item.price * (item.quantity ? item.quantity : 1);
    });
    return totalAmount;
  }

}
