import { Component, OnInit } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-jewelery-products',
  templateUrl: './jewelery-products.component.html',
  styleUrls: ['./jewelery-products.component.scss']
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
  constructor(private productsService: ProductsService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches jewelry products from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.productsService.getJewelry().subscribe(products => {
      this.products = products;
    });
  }
}
