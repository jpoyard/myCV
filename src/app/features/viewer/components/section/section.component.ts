import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mcv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SectionComponent {
  @Input() public title = 'no-title';
}
