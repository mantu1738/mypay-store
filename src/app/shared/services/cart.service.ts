import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@app/data/interfaces/products.interface';
import { Observable, tap, BehaviorSubject, of } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private quantity: number = 1;
    private cartItems: Product[] = [];
    private cartItemCountSubject = new BehaviorSubject<number>(0);
    cartItemCount$ = this.cartItemCountSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadCartItems();
        this.updateCartItemCount();
    }



    getCartItems(): Product[] {
        return this.cartItems;
    }

    getCartCount(): number {
        return this.cartItems.length;
    }

    addToCartByProductId(productId: number): Observable<Product> {
        const existingProduct = this.cartItems.find(item => item.id === productId);

        if (existingProduct) {
            // If the product is already in the cart, increase the quantity
            if (existingProduct.quantity !== undefined) {
                existingProduct.quantity += this.quantity;
            } else {
                // Handle the case where quantity is undefined (you can set a default value if needed)
                existingProduct.quantity = this.quantity;
            }
        }
        else {
            return this.http.get<Product>(`${apiUrl.AllProducts}/${productId}`)
                .pipe(
                    tap((product) => {
                        this.cartItems.push({ ...product, ['quantity']: this.quantity });
                        this.saveCartItems();
                        this.updateCartItemCount();
                    })
                );
        }
        this.saveCartItems();
        this.updateCartItemCount();

        // Return an observable with the updated product (or an empty observable if the product was already in the cart)
        return of(existingProduct);
    }

    removeFromCart(productId: number): void {
        const index = this.cartItems.findIndex(item => item.id === productId);

        if (index !== -1) {
            this.cartItems.splice(index, 1);
            // Save cart items to localStorage after removing an item
            this.saveCartItems();
            this.updateCartItemCount();
        }
    }

    clearCart(): void {
        this.cartItems = [];
        // Save an empty cart to localStorage after clearing the cart
        this.saveCartItems();
        this.updateCartItemCount();
    }

    private updateCartItemCount(): void {
        const totalQuantity = this.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
        this.cartItemCountSubject.next(totalQuantity);
    }

    private loadCartItems(): void {
        const storedItems = localStorage.getItem('cartItems');
        this.cartItems = storedItems ? JSON.parse(storedItems) : [];
        this.updateCartItemCount();
    }

    private saveCartItems(): void {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

}
