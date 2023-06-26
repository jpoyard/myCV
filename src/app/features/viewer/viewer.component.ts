import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DegreeListComponent } from './components/degree-list/degree-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { CurriculumVitaeDataService } from './services/cv-data.service';
import { TimelineNavComponent } from 'src/app/shared/components/timeline-nav/timeline-nav.component';

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
    SkillsListComponent,
    TimelineNavComponent,
    WorkExperienceListComponent,
  ],
})
export class ViewerComponent {
  constructor(public cvService: CurriculumVitaeDataService) {}
}
