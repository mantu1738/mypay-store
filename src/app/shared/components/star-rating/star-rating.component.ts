import { Component, Input } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  /**
   * The rating to be displayed.
   * @default 0
   * @type {number}
   * @example
   * <app-star-rating [rating]="4.5"></app-star-rating>
   */
  @Input() rating: number | undefined = 0;
  /**
   * The FontAwesome icon for the star.
   */
  starIcon = faStar;
  /**
   * The FontAwesome icon for the half star.
   */
  halfStarIcon = faStarHalf;

  /**
   * Returns an array of numbers to be used in the template.
   * @returns {number[]}
   * @example
   * <app-star-rating [rating]="4.5"></app-star-rating>
   */
  get stars(): number[] {
    if (this.rating === undefined) return [];
    return Array(Math.floor(this.rating)).fill(0);
  }
}

