// animations.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        style({ position: 'relative', opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
]);
