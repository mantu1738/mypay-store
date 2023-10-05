import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-electronics-products',
  templateUrl: './electronics-products.component.html',
  styleUrls: ['./electronics-products.component.scss']
})
export class ElectronicsProductsComponent {
  /**
  * Array containing the electronics products to be displayed.
  * @type {Product[]}
  */
  products: Product[] = [];

  /**
   * Creates an instance of ElectronicsProductsComponent.
   * @constructor
   * @param {ProductsService} productsService - The service responsible for fetching electronics products.
   */
  constructor(private productsService: ProductsService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches electronics products from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.productsService.getElectronics().subscribe(products => {
      this.products = products;
    });
  }
}
