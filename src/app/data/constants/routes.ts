import { Routes } from '@angular/router';

import {
    ProductsListComponent,
    ElectronicsProductsComponent,
    JeweleryProductsComponent,
    MenClothingComponent,
    WomenClothingComponent,
    ProductDetailComponent,
    LoginPageComponent,
    CartComponent
} from '@app/layout/index';
import { SignupComponent } from '@app/layout/pages/sign-up/sign-up.component';

/**
 * List of routes for the application.
 * @type {Route[]}
 */
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
    },
    {
        path: 'signup',
        component: SignupComponent
    }
]