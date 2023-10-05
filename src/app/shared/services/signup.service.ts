import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignupService {
    private localStorageKey = 'users';

    signup(user: any) {
        const existingUsers = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
        existingUsers.push(user);
        localStorage.setItem(this.localStorageKey, JSON.stringify(existingUsers));
    }
}
