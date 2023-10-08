/**
 * Base API URL for the fake store.
 * @property {string} baseApiUrl
 */
export const baseApiUrl = 'https://fakestoreapi.com';

/**
 * API URLs for various endpoints.
 * @property {string} categories - URL for fetching product categories.
 * @property {string} AllProducts - URL for fetching all products.
 * @property {string} Jewelry - URL for fetching products in the 'Jewelry' category.
 * @property {string} Electronics - URL for fetching products in the 'Electronics' category.
 * @property {string} MenClothing - URL for fetching products in the 'Men's Clothing' category.
 * @property {string} WomenClothing - URL for fetching products in the 'Women's Clothing' category.
 * @property {string} userLogin - URL for user login authentication.
 * @property {string} userSignup - URL for user signup.
 */
export const apiUrl = {
    categories: `${baseApiUrl}/products/categories`,
    AllProducts: `${baseApiUrl}/products`,
    Jewelry: `${baseApiUrl}/products/category/jewelery`,
    Electronics: `${baseApiUrl}/products/category/electronics`,
    MenClothing: `${baseApiUrl}/products/category/men's clothing`,
    WomenClothing: `${baseApiUrl}/products/category/women's clothing`,
    userLogin: `${baseApiUrl}/auth/login`,
    userSignup: `${baseApiUrl}/users`,
};
