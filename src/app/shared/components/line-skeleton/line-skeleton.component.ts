// skeleton.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  template: `
<div [style.height]="height" [style.width]="width" class="skeleton-container">

</div>
`,
  styleUrls: ["./line-skeleton.component.scss"]
})
export class LineSkeletonComponent {
  @Input() width: string = '100%';
  @Input() height: string = '20px';
}