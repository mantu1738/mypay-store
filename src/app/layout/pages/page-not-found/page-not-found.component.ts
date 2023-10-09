import { Component } from '@angular/core';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  /**
   * Represents an array containing the particles for the 404 page.
   * @type {string[]}
   */
  fourParticles: string[] = Array(20).fill('four');
  zeroParticles: string[] = Array(20).fill('zero');
}

