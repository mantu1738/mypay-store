import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '@app/shared/services/loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingComponent {
  /**
   * @constructor
   * @param loader Creates an instance of LoadingComponent.
   */
  constructor(public loader: LoaderService) { }
}