import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    constructor(private http: HttpClient) { }

    signup(username: string, password: string, email: string): Observable<any> {
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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

        // Make the HTTP POST request to the API endpoint
        return this.http.post<any>(apiUrl.userSignup, user);
    }
}
