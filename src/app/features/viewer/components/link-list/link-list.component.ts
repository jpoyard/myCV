import { Component, Input } from '@angular/core';
import { Link } from '../../model/link';

@Component({
  selector: 'mcv-link-list',
  template: `
<ul class="list-unstyled mb-0">
    <ng-container *ngFor="let link of links; last as isLast">
      <li [class.mb-2]="!isLast">
        <mcv-link
          [icon]="link.icon"
          [label]="link.label"
          [url]="link.url"
        ></mcv-link>
      </li>
    </ng-container>
</ul>
  `
})
export class LinkListComponent {
  @Input() public links: Link[] = [];
}
