import { Component } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss']
})
export class WomenClothingComponent {
  products: Product[] = [];
  loading = true;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getWomenClothing().subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }
}
