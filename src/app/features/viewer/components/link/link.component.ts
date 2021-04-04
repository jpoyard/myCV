import { Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/features/viewer/model/color.enum';

@Component({
  selector: 'mcv-link',
  templateUrl: './link.component.html',
  })
export class LinkComponent {
  @Input() public url: string = '#';
  @Input() public label: string = 'none';
  @Input() public icon?: string;
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.light;
}
