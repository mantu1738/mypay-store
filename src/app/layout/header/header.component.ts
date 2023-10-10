import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { userService } from '@app/shared/services/user.service';
import { CartService } from '@app/shared/services/cart.service';
import { generateRandomColor } from '@app/shared/utility/randomColor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Represents the file path to the logo image.
   * @type {string}
   */
  logoImagePath: string = '../../../assets/mypayLogo.webp';

  /**
   * Represents the Font Awesome icon for the shopping cart.
   * @type {any}
   */
  shoppingCartIcon: any = faShoppingCart;

  /**
   * Indicates whether the current route is a login route.
   * @type {boolean}
   */
  isLoginRoute: boolean = false;

  /**
   * Indicates whether the user is logged in.
   * @type {boolean}
   */
  isLogged: boolean = false;

  /**
   * The username of the logged-in user.
   * @type {string}
   */
  username: string | null = '';

  /**
   * The random color for the user avatar.
   */
  randomColor = generateRandomColor();

  /**
   * Indicates whether the logout menu is visible.
   * @type {boolean}
   */
  showLogoutMenu: boolean = false;

  /**
   * Represents the current value of the shopping cart.
   * Initialized with the cart count obtained from the CartService.
   * @type {number}
   */
  cartValue: number = this.CartService.getCartCount();

  /**
  * Constructor for a class that utilizes Angular Router and ActivatedRoute
  * to monitor navigation events and determine if the current route is the login route.
  * @param {Router} router - The Angular Router service for navigation.
  * @param {ActivatedRoute} route - The Angular ActivatedRoute service for route information.
  */
  constructor(private router: Router, private route: ActivatedRoute, private userService: userService, private CartService: CartService, private elementRef: ElementRef) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.route.root.firstChild?.snapshot.routeConfig?.path;
        this.isLoginRoute = currentRoute === 'login';
      });
  }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Subscribes to the `loggedIn$` observable from the `userService` to update the `isLogged` property.
   * Subscribes to the `cartItemCount$` observable from the `CartService` to update the `cartValue` property.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    this.userService.loggedIn$.subscribe(loggedIn => {
      this.isLogged = loggedIn;
    });

    this.userService.username$.subscribe(username => {
      this.username = username;
    });

    this.CartService.cartItemCount$.subscribe(count => {
      this.cartValue = count;
    });
  }

  /**
   * Redirects the user to the login page by changing the window location.
   * @method
   * @returns {void}
   */
  redirectLogin(): void {
    window.location.href = '/login';
  }

  /**
  * Logs the user out, clears the shopping cart, and redirects to the login page.
  * Calls the `logout` method from the `userService` to log the user out.
  * Changes the window location to redirect the user to the login page.
  * Calls the `clearCart` method from the `CartService` to clear the shopping cart.
  * @method
  * @returns {void}
  */
  logOut(): void {
    this.userService.logout();
    window.location.href = '/login';
    this.CartService.clearCart();
  }

  /**
   * Toggles the logout menu.
   * @method
   * @returns {void}
   */
  toggleLogoutMenu(): void {
    this.showLogoutMenu = !this.showLogoutMenu;
  }

  /**
   * Closes the logout menu if the user clicks outside of it.
   * @method
   * @param event - The event object.
   * @returns {void}
   * @memberof HeaderComponent 
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    // Close the menu if the clicked target is not inside the component
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showLogoutMenu = false;
    }
  }

}

