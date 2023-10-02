import { Component } from '@angular/core';

import { faRightFromBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logInIcon = faRightFromBracket;
  logoImagePath: string = '../../../assets/mypayLogo.png';
  shoppingCartIcon: any = faShoppingCart;
}
