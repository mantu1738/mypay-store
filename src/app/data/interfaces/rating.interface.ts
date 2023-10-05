/**
 * Represents the rating information for a product.
 * @interface Rating
 */
export interface Rating {
    /**
     * The average rating given to the product. This property is optional.
     * @type {number|undefined}
     */
    rate?: number;

    /**
     * The number of ratings given to the product. This property is optional.
     * @type {number|undefined}
     */
    count?: number;
}
