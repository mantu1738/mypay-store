import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '@app/data/constants/apiUrl';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(apiUrl.userLogin, { username, password });
    }


}