import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BootstrapColorEnum } from '../../model/color.enum';
import { NgClass } from '@angular/common';

@Component({
    selector: 'mcv-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass]
})
export class ProgressComponent {
  @Input() public value = 0;
  @Input() public content = '';
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.secondary;
}
