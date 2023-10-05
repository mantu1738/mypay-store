// src/app/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@app/data/interfaces/products.interface';
import { CartService } from '@app/shared/services/cart.service';
import { ProductsService } from '@app/shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  /** The ID of the product. */
  productId: number = 0;

  /** The details of the product. */
  product: Product = {} as Product;

  /**
   * Constructor for ProductDetailsComponent.
   * @param route - The activated route for accessing route parameters.
   * @param productsService - The service for fetching product details.
   * @param cartService - The service for managing the shopping cart.
   */
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  /**
   * Lifecycle hook called after the component is initialized.
   * Retrieves the product ID from the route parameters and fetches product details.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.getProductDetails();
  }

  /**
   * Fetches product details based on the current product ID.
   * @method
   * @returns {void}
   */
  getProductDetails(): void {
    this.productsService.getProductsById(this.productId).subscribe(product => {
      this.product = product;
    });
  }

  /**
   * Adds the current product to the shopping cart.
   * @param productId - The ID of the product to be added to the cart.
   * @method
   * @returns {void}
   */
  addToCart(productId: number): void {
    this.cartService.addToCartByProductId(productId).subscribe();
  }
}

