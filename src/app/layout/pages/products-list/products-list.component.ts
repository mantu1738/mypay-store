import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { Product } from '@app/data/interfaces/products.interface';
import { LoaderService } from '@app/shared/services/loader.service';
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
  constructor(private productsService: ProductsService, private loaderService: LoaderService, private route: ActivatedRoute, private router: Router) { }

  /**
   * Lifecycle method called when component initializes.
   * Subscribes to the route url and fetches products based on the url.
   * @returns void
   * @memberof ProductsListComponent 
   */
  ngOnInit(): void {
    this.loaderService.showLoader();
    this.route.url.subscribe(urlSegments => {
      const pathFromRoute = urlSegments.map(segment => segment.path).join('/');
      this.fetchProducts(pathFromRoute);
    });
  }

  /**
   * @private
   * Fetches products based on the path from the route.
   * @param pathFromRoute - The path from the route.
   * @returns void
   */
  private fetchProducts(pathFromRoute: string): void {
    let productObservable;

    switch (pathFromRoute) {
      case 'electronics':
        productObservable = this.productsService.getElectronics();
        break;
      case 'jewelery':
        productObservable = this.productsService.getJewelry();
        break;
      case `men's clothing`:
        productObservable = this.productsService.getMenClothing();
        break;
      case `women's clothing`:
        productObservable = this.productsService.getWomenClothing();
        break;
      default:
        productObservable = this.productsService.getProducts();
        break;
    }

    productObservable.subscribe(products => {
      this.loaderService.hideLoader();
      this.products = products;
    });
  }
}

