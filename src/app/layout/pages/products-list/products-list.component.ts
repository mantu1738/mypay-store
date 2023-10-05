import { Component, OnInit } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  /** Array of products to be displayed. */
  products: Product[] = [];

  /**
   * Constructor for ProductListComponent.
   * @param productsService - The service for fetching products.
   */
  constructor(private productsService: ProductsService) { }

  /**
   * Lifecycle hook called after the component is initialized.
   * Fetches the list of products from the service.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}

