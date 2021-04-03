import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { SectionComponent } from './components/section/section.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SkillWithLevelComponent } from './components/skill-with-level/skill-with-level.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    WorkExperienceComponent,
    WorkExperienceListComponent,
    SectionComponent,
    SkillListComponent,
    ProgressComponent,
    PrimaryComponent,
    SecondaryComponent,
    BadgeComponent,
    SkillWithLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
