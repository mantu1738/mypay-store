import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { LoaderService } from '@app/shared/services/loader.service';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['../styles/product-lists.styles.scss']
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
  constructor(private productsService: ProductsService, private loaderService: LoaderService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches men's clothing products from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.loaderService.showLoader();
    this.productsService.getMenClothing().subscribe(products => {
      this.products = products;
      this.loaderService.hideLoader();
    });
  }
}
