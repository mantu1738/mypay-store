import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    /**
     * @constructor
     * @param http - The HttpClient module for making HTTP requests.
     * @returns An instance of the CategoryService class.
     */
    constructor(private http: HttpClient) { }

    /**
     * Get the categories.
     * @method
     * @returns An observable of an array of strings representing the categories.
     */
    getCategories(): Observable<string[]> {
        return this.http.get<string[]>(apiUrl.categories);
    }
}