import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Represents the route transition animation.
 * @memberof RouteAnimations
 * @export
 * @see {@link https://angular.io/api/animations/trigger|Angular trigger animation}
 */
export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        style({ position: 'relative', opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
]);
