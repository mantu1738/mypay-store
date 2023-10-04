import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MainpageComponent } from '@layout/mainpage/mainpage.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SaleBannerComponent } from '@shared/components/sale-banner/sale-banner.component';
import { LineSkeletonComponent } from '@shared/components/line-skeleton/line-skeleton.component';
import { CategoriesComponent } from '@layout/categories/categories.component';
import { ProductsListComponent } from '@layout/pages/products-list/products-list.component';
import { ElectronicsProductsComponent } from '@layout/pages/electronics-products/electronics-products.component';
import { JeweleryProductsComponent } from '@layout/pages/jewelery-products/jewelery-products.component';
import { MenClothingComponent } from '@layout/pages/men-clothing/men-clothing.component';
import { WomenClothingComponent } from '@layout/pages/women-clothing/women-clothing.component';
import { ProductListItemComponent } from '@shared/components/product-list-item/product-list-item.component';
import { StarRatingComponent } from '@shared/components/star-rating/star-rating.component';
import { ProductDetailComponent } from '@layout/pages/product-detail/product-detail.component';
import { LoginPageComponent } from '@layout/pages/login-page/login-page.component';
import { CartComponent } from '@layout/pages/cart/cart.component';
import { CartItemComponent } from './shared/components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    SaleBannerComponent,
    CategoriesComponent,
    LineSkeletonComponent,
    ProductsListComponent,
    ElectronicsProductsComponent,
    JeweleryProductsComponent,
    MenClothingComponent,
    WomenClothingComponent,
    ProductListItemComponent,
    StarRatingComponent,
    ProductDetailComponent,
    LoginPageComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
