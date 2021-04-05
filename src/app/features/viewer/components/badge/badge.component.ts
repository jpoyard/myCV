import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from '../../model/color.enum';

@Component({
  selector: 'mcv-badge',
  template: `
  <span class="badge" [class.badge-pill]="hasBadgePill" [ngClass]="'badge-'+color">{{name}}</span>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() public name = '';
  @Input() public hasBadgePill = true;
  @Input() public color = BootstrapColorEnum.secondary;
}
