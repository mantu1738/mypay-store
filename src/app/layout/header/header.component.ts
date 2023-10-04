import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { userService } from '@app/shared/services/user.service';
import { CartService } from '@app/shared/services/cart.service';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoImagePath: string = '../../../assets/mypayLogo.png';
  shoppingCartIcon: any = faShoppingCart;
  isLoginRoute: boolean = false;
  isLogged: boolean = false;
  cartValue: number = this.CartService.getCartCount();




  /**
  * Constructor for a class that utilizes Angular Router and ActivatedRoute
  * to monitor navigation events and determine if the current route is the login route.
  * @param {Router} router - The Angular Router service for navigation.
  * @param {ActivatedRoute} route - The Angular ActivatedRoute service for route information.
  */
  constructor(private router: Router, private route: ActivatedRoute, private userService: userService, private CartService: CartService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.route.root.firstChild?.snapshot.routeConfig?.path;
        this.isLoginRoute = currentRoute === 'login';
      });
  }

  ngOnInit(): void {
    this.isLogged = this.userService.isLogged();
    this.CartService.cartItemCount$.subscribe(count => {
      this.cartValue = count;
    });
  }


  redirectLogin() {
    window.location.href = '/login';
  }

  logOut() {
    this.userService.logout();
    // this.isLogged = false;
    window.location.href = '/login';
  }

}

