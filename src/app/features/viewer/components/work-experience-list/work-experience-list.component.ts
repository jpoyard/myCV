import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getMockWorkExperiences } from '../../mock/work-experience.mock.spec';
import { WorkExperience } from '../../model/work-experience';

@Component({
  selector: 'mcv-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceListComponent {

  @Input() public workExperiences: WorkExperience[] = [];

}
