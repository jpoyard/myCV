import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'mcv-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslateModule]
})
export class SectionComponent  {
  @Input() public title = 'no-title';
}
