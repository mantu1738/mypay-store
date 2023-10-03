import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';
import { Product } from '@app/data/interfaces/products.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.AllProducts);
    }

    getJewelry(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.Jewelry);
    }

    getElectronics(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.Electronics);
    }

    getMenClothing(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.MenClothing);
    }

    getWomenClothing(): Observable<Product[]> {
        return this.http.get<Product[]>(apiUrl.WomenClothing);
    }

    getProductsById(id: number): Observable<Product> {
        return this.http.get<Product>(`${apiUrl.AllProducts}/${id}`);
    }
}