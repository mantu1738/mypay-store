import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /**
   * Represents the state of the loader.
   * @memberof LoaderService
   * @see {@link https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject|BehaviorSubject}
   */
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  /**
   * Represents the state of the loader.
   * @memberof LoaderService
   * @see {@link https://rxjs-dev.firebaseapp.com/api/index/class/Observable|Observable}
   */
  isLoading$ = this.isLoadingSubject.asObservable();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * Shows the loader.
   * @method
   * @returns {void}
   */
  showLoader(): void {
    this.isLoadingSubject.next(true);
  }

  /**
   * Hides the loader.
   * @method
   * @returns {void}
   */
  hideLoader(): void {
    this.isLoadingSubject.next(false);
  }
}