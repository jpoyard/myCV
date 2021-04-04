import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getMockSkills } from 'src/app/features/viewer/mock/skill.mock.spec';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent  {

  public skills= getMockSkills();

}
