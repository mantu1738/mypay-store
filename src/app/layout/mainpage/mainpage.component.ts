import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 0 }))]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MainpageComponent {
  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
