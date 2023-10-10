import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN = 'TOKEN';

@Injectable({
    providedIn: 'root'
})
export class userService {
    /**
    * BehaviorSubject to hold the current logged-in status.
    * Initial value is set to `false` (user is not logged in by default).
    * @private
    */
    private loggedInSubject = new BehaviorSubject<boolean>(false);
    private usernameSubject = new BehaviorSubject<string | null>(this.getUsernameFromLocalStorage());

    /**
     * Observable that clients can subscribe to in order to receive updates
     * about the logged-in status.
     */
    loggedIn$ = this.loggedInSubject.asObservable();
    username$ = this.usernameSubject.asObservable();

    /**
     * @constructor
     * The constructor of the service.
     * Observable that clients can subscribe to in order to receive updates
     */
    constructor() {
        this.getIsLogged();
        this.getUsername();
    }

    /**
    * Sets the authentication token in the local storage.
    * @param {string} token - The authentication token to be stored.
    * @returns {void}
    */
    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
        this.getIsLogged();
    }

    /**
     * Sets the username in the local storage.
     * @param username - The username to be stored.
     * @returns {void}
     */
    setUsername(username: string): void {
        localStorage.setItem('username', username);
        this.usernameSubject.next(username);
    }

    /**
     * Gets the username from the local storage and updates the 'usernameSubject' BehaviorSubject.
     * @returns {void}
     */
    getUsername(): void {
        this.usernameSubject.next(this.getUsernameFromLocalStorage());
    }

    /**
     * Gets the username from the local storage.
     * @private
     * @returns {string | null} - The username from the local storage.
     */
    private getUsernameFromLocalStorage(): string | null {
        return localStorage.getItem('username');
    }

    /**
     * Checks whether the user is logged in by updating the 'loggedInSubject'
     * BehaviorSubject based on the presence of the authentication token in the local storage.
     * @returns {void}
     */
    getIsLogged(): void {
        this.loggedInSubject.next(!!localStorage.getItem(TOKEN));
    }

    /**
     * Logs the user out by removing the authentication token from the local storage.
     * @returns {void}
     */
    logout(): void {
        localStorage.removeItem(TOKEN);
    }
}