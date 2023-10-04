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
  @Input() product: Product = {} as Product;
  @Output() onClick = new EventEmitter<Number>();
  @Output() addtoCart = new EventEmitter<Number>();
  deleteIcon = faTrashCan;

  handleClick(productId: number) {
    this.onClick.emit(productId);
  }

  handleAddToCart(productId: number) {
    this.addtoCart.emit(productId);
  }
}
