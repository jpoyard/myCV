import { Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/model/color.enum';

@Component({
  selector: 'mcv-badge',
  template: `
  <span class="badge" [class.badge-pill]="hasBadgePill" [ngClass]="'badge-'+color">{{name}}</span>
`
})
export class BadgeComponent {
  @Input() public name: string = '';
  @Input() public hasBadgePill = true;
  @Input() public color = BootstrapColorEnum.secondary
}
