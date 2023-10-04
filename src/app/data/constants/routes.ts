import { Routes } from '@angular/router';

import { ElectronicsProductsComponent } from '@app/layout/pages/electronics-products/electronics-products.component';
import { JeweleryProductsComponent } from '@app/layout/pages/jewelery-products/jewelery-products.component';
import { MenClothingComponent } from '@app/layout/pages/men-clothing/men-clothing.component';
import { ProductsListComponent } from '@app/layout/pages/products-list/products-list.component';
import { WomenClothingComponent } from '@app/layout/pages/women-clothing/women-clothing.component';
import { ProductDetailComponent } from '@app/layout/pages/product-detail/product-detail.component';
import { LoginPageComponent } from '@app/layout/pages/login-page/login-page.component';
import { CartComponent } from '@app/layout/pages/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
    },
    {
        path: 'electronics',
        component: ElectronicsProductsComponent,
    },
    {
        path: 'jewelery',
        component: JeweleryProductsComponent
    },
    {
        path: `men's clothing`,
        component: MenClothingComponent
    },
    {
        path: `women's clothing`,
        component: WomenClothingComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'electronics/product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'jewelery/product/:id',
        component: ProductDetailComponent
    },
    {
        path: `men's clothing/product/:id`,
        component: ProductDetailComponent
    },
    {
        path: `women's clothing/product/:id`,
        component: ProductDetailComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'cart',
        component: CartComponent,
    }
]