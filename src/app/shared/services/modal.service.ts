import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private modalState = false;

    constructor() { }

    openModal() {
        this.modalState = true;
        console.log('Modal state: ', this.modalState);
    }

    closeModal() {
        this.modalState = false;
    }

    get ModalState() {
        return this.modalState;
    }
}
