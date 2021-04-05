import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/features/viewer/model/color.enum';

@Component({
  selector: 'mcv-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public url = '#';
  @Input() public label = 'none';
  @Input() public icon?: string;
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.light;
}
