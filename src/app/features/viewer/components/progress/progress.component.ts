import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/features/viewer/model/color.enum';

@Component({
  selector: 'mcv-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
  @Input() public value = 0;
  @Input() public content = '';
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.secondary;
}
