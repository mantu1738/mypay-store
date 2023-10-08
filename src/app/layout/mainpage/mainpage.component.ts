import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { routeTransition } from '@app/shared/utility/routeAnimations';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  animations: [routeTransition],
})
export class MainpageComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to the NavigationEnd event to detect route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.routeAnimationState = this.getRouteAnimationState();
    });
  }
  // Default animation state (you can set it based on your starting route)
  routeAnimationState: number = 1;

  getRouteAnimationState(): number {
    // Get the data property from the activated route
    const routeData = this.activatedRoute.firstChild?.snapshot.data;

    // Use the animationState property from the route data or provide a default value
    const animationState = routeData?.['animationState'] || 1;

    return animationState;
  }
}
