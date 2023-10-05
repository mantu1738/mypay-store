import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent {
  /**
 * Array containing the men's clothing products to be displayed.
 * @type {Product[]}
 */
  products: Product[] = [];

  /**
   * Creates an instance of MenClothingProductsComponent.
   * @constructor
   * @param {ProductsService} productsService - The service responsible for fetching men's clothing products.
   */
  constructor(private productsService: ProductsService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches men's clothing products from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.productsService.getMenClothing().subscribe(products => {
      this.products = products;
    });
  }
}
