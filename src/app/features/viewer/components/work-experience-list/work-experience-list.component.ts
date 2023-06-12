import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WorkExperience } from '../../model/work-experience';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'mcv-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, WorkExperienceComponent],
})
export class WorkExperienceListComponent {
  @Input() public workExperiences: WorkExperience[] = [];
}
