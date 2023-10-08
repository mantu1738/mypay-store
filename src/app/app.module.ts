import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy, NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ButtonComponent,
  SaleBannerComponent,
  StarRatingComponent,
  LineSkeletonComponent,
  ProductListItemComponent,
  CartItemComponent,
  SnackbarComponent
} from '@shared/components';

import { PayementModalComponent } from '@shared/modals';

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
  WomenClothingComponent,
  SignupComponent,
} from '@layout/index';
import { LoadingComponent } from './shared/components/loading/loading.component';

/**
 * Configuration for NgHttpCaching.
 *
 * @interface NgHttpCachingConfig
 * @property {number} lifetime - The duration for which the cache remains valid, specified in milliseconds.
 * @property {string[]} allowedMethod - An array of HTTP methods that are allowed for caching. E.g., ['GET', 'HEAD'].
 * @property {NgHttpCachingStrategy} cacheStrategy - The caching strategy to be used (e.g., NgHttpCachingStrategy.ALLOW_ALL).
 */
const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 60 * 60 * 24 * 365 * 1000, // 30 days
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};


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
      CartItemComponent,
      SignupComponent,
      SnackbarComponent,
      PayementModalComponent,
      LoadingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
    NgOptimizedImage
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
