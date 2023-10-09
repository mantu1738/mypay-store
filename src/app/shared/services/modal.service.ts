import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    /**
     * Represents the state of the modal.
     * @type {boolean}
     * @default false
     */
    private modalState: boolean = false;

    /**
     * @constructor
     */
    constructor() { }

    /**
     * Opens the modal.
     * @method
     * @returns {void}
     */
    openModal(): void {
        this.modalState = true;
    }

    /**
     * Closes the modal.
     * @method
     * @returns {void}
     */
    closeModal(): void {
        this.modalState = false;
    }

    /**
     * Returns the state of the modal.
     * @method
     * @returns {boolean} - The state of the modal.
     */
    get ModalState(): boolean {
        return this.modalState;
    }
}
