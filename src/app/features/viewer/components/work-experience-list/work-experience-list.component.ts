import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getMockWorkExperiences } from '../../mock/work-experience.mock.spec';

@Component({
  selector: 'mcv-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceListComponent {
  public workExperiences = getMockWorkExperiences()
}
