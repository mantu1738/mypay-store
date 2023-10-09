import { Routes } from '@angular/router';

import {
    ProductsListComponent,
    ElectronicsProductsComponent,
    JeweleryProductsComponent,
    MenClothingComponent,
    WomenClothingComponent,
    ProductDetailComponent,
    LoginPageComponent,
    CartComponent,
    SignupComponent,
    PageNotFoundComponent
} from '@app/layout/index';

/**
 * List of routes for the application.
 * @type {Route[]}
 */
export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        data: { animationState: 1 }
    },
    {
        path: 'electronics',
        component: ElectronicsProductsComponent,
        data: { animationState: 2 }
    },
    {
        path: 'jewelery',
        component: JeweleryProductsComponent,
        data: { animationState: 1 }
    },
    {
        path: `men's clothing`,
        component: MenClothingComponent,
        data: { animationState: 2 }
    },
    {
        path: `women's clothing`,
        component: WomenClothingComponent,
        data: { animationState: 1 }
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        data: { animationState: 2 }
    },
    {
        path: 'electronics/product/:id',
        component: ProductDetailComponent,
        data: { animationState: 1 }
    },
    {
        path: 'jewelery/product/:id',
        component: ProductDetailComponent,
        data: { animationState: 2 }
    },
    {
        path: `men's clothing/product/:id`,
        component: ProductDetailComponent,
        data: { animationState: 1 }
    },
    {
        path: `women's clothing/product/:id`,
        component: ProductDetailComponent,
        data: { animationState: 2 }
    },
    {
        path: 'login',
        component: LoginPageComponent,
        data: { animationState: 1 }
    },
    {
        path: 'cart',
        component: CartComponent,
        data: { animationState: 2 }
    },
    {
        path: 'signup',
        component: SignupComponent,
        data: { animationState: 1 }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { animationState: 2 }
    }
]