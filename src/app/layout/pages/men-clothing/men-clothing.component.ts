import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent {
  products: Product[] = [];
  loading = true;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getMenClothing().subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }
}
