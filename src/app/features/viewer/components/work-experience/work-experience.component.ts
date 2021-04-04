import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { getMockSkills } from 'src/app/features/viewer/mock/skill.mock.spec';
import { getMockWorkExperiences } from '../../mock/work-experience.mock.spec';
import { Skill } from '../../model/skill';
import { WorkExperience } from '../../model/work-experience';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {

  @Input() public workExperience?: WorkExperience;

  constructor(public languageService: LanguageService) { }
}
