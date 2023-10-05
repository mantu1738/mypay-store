import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject, of } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';
import { Product } from '@app/data/interfaces/products.interface';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    /**
     * The quantity of the product to be added to the cart.
     * @default 1
     */
    private quantity: number = 1;
    /**
     * The array of cart items.
     * @default []
     * @type {Product[]} An array of Product objects representing items in the cart.
     */
    private cartItems: Product[] = [];
    /**
     * An observable representing the total count of items in the cart.
     */
    private cartItemCountSubject = new BehaviorSubject<number>(0);
    // Expose the observable as an observable property
    cartItemCount$ = this.cartItemCountSubject.asObservable();

    /**
     * @constructor
     * @param http - The HttpClient module for making HTTP requests.
     * @returns An instance of the CartService class.
     * @example
     * constructor(private CartService: CartService) { }
     */
    constructor(private http: HttpClient) {
        this.loadCartItems();
        this.updateCartItemCount();
    }

    /**
     * Get the array of cart items.
     * @returns An array of Product objects representing items in the cart.
     */
    getCartItems(): Product[] {
        return this.cartItems;
    }

    /**
     * Get the total count of items in the cart.
     * @returns The total count of items in the cart.
     */
    getCartCount(): number {
        return this.cartItems.length;
    }

    /**
     * Add a product to the cart by its ID.
     * @param productId - The ID of the product to add to the cart.
     * @returns An Observable representing the added product.
     */
    addToCartByProductId(productId: number): Observable<Product> {
        const existingProduct = this.cartItems.find(item => item.id === productId);

        if (existingProduct) {
            if (existingProduct.quantity !== undefined) {
                existingProduct.quantity += this.quantity;
            } else {
                existingProduct.quantity = this.quantity;
            }
        } else {
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
        return of(existingProduct);
    }

    /**
     * Remove a product from the cart by its ID.
     * @param productId - The ID of the product to remove from the cart.
     */
    removeFromCart(productId: number): void {
        const index = this.cartItems.findIndex(item => item.id === productId);

        if (index !== -1) {
            this.cartItems.splice(index, 1);
            this.saveCartItems();
            this.updateCartItemCount();
        }
    }

    /**
     * Clear all items from the cart.
     * This is a public method and can be called from a component.
     * @returns {void}
     */
    clearCart(): void {
        this.cartItems = [];
        this.saveCartItems();
        this.updateCartItemCount();
    }

    /**
     * @private 
     * Update the quantity of a product in the cart.
     * Update the total item count in the cart.
     * This is a private method and is automatically called when the cart is modified.
     * @returns {void}
     */
    private updateCartItemCount(): void {
        const totalQuantity = this.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
        this.cartItemCountSubject.next(totalQuantity);
    }

    /**
     * @private
     * Load cart items from local storage during service initialization.
     * This is a private method and is automatically called in the constructor.
     * @returns {void}
     */
    private loadCartItems(): void {
        const storedItems = localStorage.getItem('cartItems');
        this.cartItems = storedItems ? JSON.parse(storedItems) : [];
        this.updateCartItemCount();
    }

    /**
     * @private
     * Save the current cart items to local storage.
     * This is a private method and is automatically called when the cart is modified.
     * @returns {void}
     */
    private saveCartItems(): void {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

}
