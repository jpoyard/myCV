import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimelineNavComponent } from 'src/app/shared/components/timeline-nav/timeline-nav.component';
import { WorkExperience } from '../../model/work-experience';
import { SectionComponent } from '../section/section.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'mcv-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    SectionComponent,
    TimelineNavComponent,
    WorkExperienceComponent,
  ],
  host: {
    class: 'mcv-work-experience-list',
  },
})
export class WorkExperienceListComponent {
  @Input() public workExperiences: WorkExperience[] = [];
}
