import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    /**
     * @constructor
     * @param http - The HttpClient module for making HTTP requests.
     */
    constructor(private http: HttpClient) { }

    /**
     * Login a user.
     * @param username  
     * @param password 
     * @returns An observable of the HTTP response.
     */
    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(apiUrl.userLogin, { username, password });
    }
}


