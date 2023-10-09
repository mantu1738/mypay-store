import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    /**
     * @constructor
     * @param http Creates an instance of HttpClient.
     */
    constructor(private http: HttpClient) { }

    /**
     * Sends a signup request to the server.
     * @param username username of the user.
     * @param password password of the user.
     * @param email email of the user.
     * @returns {Observable<any>} - An observable of any type.
     */
    signup(username: string, password: string, email: string): Observable<any> {
        const user = JSON.stringify(
            {
                email: email,
                username: username,
                password: password,
                name: {
                    firstname: 'John',
                    lastname: 'Doe'
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: '1-570-236-7033'
            }
        );
        return this.http.post<any>(apiUrl.userSignup, user);
    }
}
