import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BootstrapColorEnum } from '../../model/color.enum';

@Component({
  selector: 'mcv-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgClass],
})
export class LinkComponent {
  @Input() public url = '#';
  @Input() public label = 'none';
  @Input() public icon?: string;
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.light;
}
