import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-jewelery-products',
  templateUrl: './jewelery-products.component.html',
  styleUrls: ['./jewelery-products.component.scss']
})
export class JeweleryProductsComponent {
  products: Product[] = [];
  loading = true;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getJewelry().subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }
}
