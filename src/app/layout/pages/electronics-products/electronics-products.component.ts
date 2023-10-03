import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-electronics-products',
  templateUrl: './electronics-products.component.html',
  styleUrls: ['./electronics-products.component.scss']
})
export class ElectronicsProductsComponent {
  products: Product[] = [];
  loading = true;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getElectronics().subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }
}
