import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DegreeListComponent } from './components/degree-list/degree-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { SectionComponent } from './components/section/section.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { CurriculumVitaeDataService } from './services/cv-data.service';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html',
  standalone: true,
  imports: [
    DegreeListComponent,
    LanguageListComponent,
    LinkListComponent,
    NgFor,
    NgIf,
    SectionComponent,
    SkillListComponent,
    WorkExperienceListComponent,
  ],
})
export class ViewerComponent {
  constructor(public cvService: CurriculumVitaeDataService) {}
}
