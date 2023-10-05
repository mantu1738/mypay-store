import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss']
})
export class WomenClothingComponent {
  /** Array of products to be displayed. */
  products: Product[] = [];

  /**
   * @constructor
   * Creates an instance of WomenClothingComponent.
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
    this.productsService.getWomenClothing().subscribe(products => {
      this.products = products;
    });
  }
}
