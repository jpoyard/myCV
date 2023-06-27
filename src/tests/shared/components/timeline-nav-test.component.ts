import { Component } from '@angular/core';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';
import { TimelineNavComponent } from 'src/app/shared/components/timeline-nav/timeline-nav.component';

@Component({
  selector: 'mcv-timeline-nav-test',
  standalone: true,
  imports: [TimelineNavComponent],
  template: `
    <mcv-timeline-nav [workExperiences]="workExperiences"></mcv-timeline-nav>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class TimelineNavTestComponent {
  workExperiences = getMockWorkExperiences();
}
