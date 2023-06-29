import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SkillsListComponent } from '@features/viewer/components/skills-list/skills-list.component';
import { getMockSkills } from 'src/app/mock/skill.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-skills-list-test',
  standalone: true,
  imports: [
    FormsModule,
    MatSlideToggleModule,
    OutputTestContainerComponent,
    SkillsListComponent,
  ],
  template: `
    <mcv-output-test-container [data]="skills">
      <mat-slide-toggle color="primary" [(ngModel)]="withLevel" inputs>
        withLevel
      </mat-slide-toggle>
      <mcv-skills-list
        [title]="title"
        [skills]="skills"
        [withLevel]="withLevel"
        output
      ></mcv-skills-list>
    </mcv-output-test-container>
  `,
})
export class SkillsListTestComponent {
  title = 'test';
  skills = getMockSkills();
  withLevel = false;
}
