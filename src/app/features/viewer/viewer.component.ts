import { Component, OnInit } from '@angular/core';
import { getMockSkills } from 'src/app/features/viewer/mock/skill.mock.spec';
import { getMockCareerSummary } from './mock/career-summary.mock.spec';
import { getMockDegrees } from './mock/degree.mock.spec';
import { getMockLanguages } from './mock/language.mock.spec';
import { getMockPrimaryLinks, getMockSecondaryLinks } from './mock/link.mock.spec';
import { getMockPersonalData } from './mock/personal-data.mock.spec';
import { getMockWorkExperiences } from './mock/work-experience.mock.spec';
import { CurriculumVitaeDataService } from './services/cv-data.service';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent {
  constructor(public cvService: CurriculumVitaeDataService){}
}
