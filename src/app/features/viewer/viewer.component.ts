import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DegreesListComponent } from './components/degrees-list/degrees-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LinksListComponent } from './components/links-list/links-list.component';
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
    DegreesListComponent,
    LanguageListComponent,
    LinksListComponent,
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
