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
  // Default animation state (you can set it based on your starting route)
  routeAnimationState: number = 1;

  /**
 * Creates an instance of YourComponent.
 * @constructor 
 * @param {Router} router - The Angular Router service used for navigation.
 * @param {ActivatedRoute} activatedRoute - The Angular ActivatedRoute service used for accessing information about the current route.
 */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.routeAnimationState = this.getRouteAnimationState();
    });
  }

  /**
  * Gets the animation state for route transitions.
  * The animation state is retrieved from the data property of the first child snapshot of the activated route.
  * If the animationState property is not found in the route data, a default value of 1 is provided.
  * @method
  * @returns {number} The animation state for route transitions.
  */
  getRouteAnimationState(): number {
    const routeData = this.activatedRoute.firstChild?.snapshot.data;
    const animationState = routeData?.['animationState'] || 1;
    return animationState;
  }
}
