import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
    providedIn: 'root'
})
export class userService {

    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
    }

    isLogged() {
        return !!localStorage.getItem(TOKEN);
    }

    logout(): void {
        localStorage.removeItem(TOKEN);
    }
}