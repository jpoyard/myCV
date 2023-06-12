import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../model/link';
import { LinkComponent } from '../link/link.component';

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
  `,
  standalone: true,
  imports: [NgFor, LinkComponent],
})
export class LinkListComponent {
  @Input() public links: Link[] = [];
}
