import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeComponent } from './components/badge/badge.component';
import { DegreeListComponent } from './components/degree-list/degree-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkComponent } from './components/link/link.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SectionComponent } from './components/section/section.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillWithLevelComponent } from './components/skill-with-level/skill-with-level.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    HttpClientModule,
    TranslateModule.forChild(),
    ViewerComponent,
    WorkExperienceComponent,
    WorkExperienceListComponent,
    SectionComponent,
    SkillListComponent,
    ProgressComponent,
    BadgeComponent,
    SkillWithLevelComponent,
    LinkComponent,
    DegreeListComponent,
    LanguageListComponent,
    LinkListComponent,
  ],
})
export class ViewerModule {}
