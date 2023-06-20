import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineNavComponent } from 'src/app/shared/components/timeline-nav/timeline-nav.component';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';

@Component({
  selector: 'mcv-timeline-nav-test',
  standalone: true,
  imports: [CommonModule, TimelineNavComponent],
  template: `
    <mcv-timeline-nav [workExperiences]="workExperiences"></mcv-timeline-nav>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class TimelineNavTestComponent {
  workExperiences = getMockWorkExperiences();
}
