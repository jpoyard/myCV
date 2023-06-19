import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormatDatePipe } from 'src/app/shared/pipe/format-date/format-date.pipe';
import { WorkExperience } from '../../model/work-experience';
import { SkillListComponent } from '../skill-list/skill-list.component';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, SkillListComponent, FormatDatePipe],
})
export class WorkExperienceComponent {
  @Input() public workExperience?: WorkExperience;
}
