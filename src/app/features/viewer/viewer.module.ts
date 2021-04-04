import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeComponent } from './components/badge/badge.component';
import { DegreeListComponent } from './components/degree-list/degree-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LinkComponent } from './components/link/link.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { SectionComponent } from './components/section/section.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillWithLevelComponent } from './components/skill-with-level/skill-with-level.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';

@NgModule({
  declarations: [
    ViewerComponent,
    ThumbnailComponent,
    WorkExperienceComponent,
    WorkExperienceListComponent,
    SectionComponent,
    SkillListComponent,
    ProgressComponent,
    PrimaryComponent,
    SecondaryComponent,
    BadgeComponent,
    SkillWithLevelComponent,
    LinkComponent,
    DegreeListComponent,
    LanguageListComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ViewerModule { }
