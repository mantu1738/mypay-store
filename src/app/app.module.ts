import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ButtonComponent,
  SaleBannerComponent,
  StarRatingComponent,
  LineSkeletonComponent,
  ProductListItemComponent,
  CartItemComponent
} from '@shared/components';

import {
  HeaderComponent,
  MainpageComponent,
  FooterComponent,
  CategoriesComponent,
  CartComponent,
  LoginPageComponent,
  ElectronicsProductsComponent,
  JeweleryProductsComponent,
  ProductDetailComponent,
  ProductsListComponent,
  MenClothingComponent,
  WomenClothingComponent
} from '@layout/index';


@NgModule({
  declarations:
    [
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
