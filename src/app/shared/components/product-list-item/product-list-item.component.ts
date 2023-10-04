import { Component, Input } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { CartService } from '@app/shared/services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() product: Product = {} as Product;
  @Input() routePath: string = '';


  constructor(private CartService: CartService) {
  }

  addToCart(productId: number): void {
    this.CartService.addToCartByProductId(productId)
      .subscribe();
  }
}
