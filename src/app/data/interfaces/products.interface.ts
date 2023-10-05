import { Rating } from './rating.interface';

/**
 * Represents a product in the application.
 * @interface Product
 */
export interface Product {
    /**
     * The unique identifier for the product.
     * @type {number}
     */
    id: number;

    /**
     * The title or name of the product.
     * @type {string}
     */
    title: string;

    /**
     * The price of the product.
     * @type {number}
     */
    price: number;

    /**
     * A brief description of the product.
     * @type {string}
     */
    description: string;

    /**
     * The category to which the product belongs.
     * @type {string}
     */
    category: string;

    /**
     * The URL or path to the product image.
     * @type {string}
     */
    image: string;

    /**
     * The rating information for the product.
     * @type {Rating}
     */
    rating: Rating;

    /**
     * The quantity of the product. This is optional and may not be present in all contexts.
     * @type {number|undefined}
     */
    quantity?: number;
}