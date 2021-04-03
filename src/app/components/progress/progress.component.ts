import { Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/model/color.enum';

@Component({
  selector: 'mcv-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() public value: number = 0;
  @Input() public content: string = '';
  @Input() public color: BootstrapColorEnum = BootstrapColorEnum.secondary;
}
