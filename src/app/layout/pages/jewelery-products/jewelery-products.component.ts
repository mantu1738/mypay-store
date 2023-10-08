import { Component, OnInit } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { LoaderService } from '@app/shared/services/loader.service';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-jewelery-products',
  templateUrl: './jewelery-products.component.html',
  styleUrls: ['../styles/product-lists.styles.scss']
})

export class JeweleryProductsComponent implements OnInit {
  /**
   * Array containing the jewelry products to be displayed.
   * @type {Product[]}
   */
  products: Product[] = [];

  /**
   * Creates an instance of JeweleryProductsComponent.
   * @constructor
   * @param {ProductsService} productsService - The service responsible for fetching jewelry products.
   */
  constructor(private productsService: ProductsService, private loaderService: LoaderService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches jewelry products from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.loaderService.showLoader();
    this.productsService.getJewelry().subscribe(products => {
      this.products = products;
      this.loaderService.hideLoader();
    });
  }
}
