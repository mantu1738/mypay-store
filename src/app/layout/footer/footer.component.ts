import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  facebookIcon = faFacebookF;
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;

}
