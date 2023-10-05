import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';
import { Product } from '@app/data/interfaces/products.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    /**
     * @constructor
     * @param http - The HttpClient module for making HTTP requests.
     */
    constructor(private http: HttpClient) { }

    /**
     * Get the products.
     * @returns An observable of an array of Product objects representing the products.
     */
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.AllProducts);
    }

    /**
     * Get the products by category.
     * @returns An observable of an array of Product objects representing the products.
     */
    getJewelry(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.Jewelry);
    }

    /**
     * Get the products by category.
     * @returns An observable of an array of Product objects representing the products.
     */
    getElectronics(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.Electronics);
    }

    /**
     * Get the products by category.
     * @returns An observable of an array of Product objects representing the products.
     */
    getMenClothing(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.MenClothing);
    }

    /**
     * Get the products by category.
     * @returns An observable of an array of Product objects representing the products.
     */
    getWomenClothing(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.WomenClothing);
    }

    /**
     * Get the products by category.
     * @returns An observable of an array of Product objects representing the products.
     */
    getProductsById(id: number): Observable<Product> {
        return this.http.get<Product>(`${apiUrl.AllProducts}/${id}`);
    }
}