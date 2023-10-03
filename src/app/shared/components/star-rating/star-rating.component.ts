import { Component, Input } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number | undefined = 0;

  starIcon = faStar;
  halfStarIcon = faStarHalf;
  get stars() {
    if (this.rating === undefined) return [];
    return Array(Math.floor(this.rating)).fill(0);
  }
}

