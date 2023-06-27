import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DegreesListComponent } from './components/degrees-list/degrees-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { CurriculumVitaeDataService } from './services/cv-data.service';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  standalone: true,
  imports: [
    DegreesListComponent,
    LanguagesListComponent,
    NgFor,
    NgIf,
    SectionComponent,
    SkillsListComponent,
    HeaderComponent,
    WorkExperienceListComponent,
  ],
})
export class ViewerComponent {
  constructor(public cvService: CurriculumVitaeDataService) {}
}
