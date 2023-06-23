import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SkillListComponent } from '@features/viewer/components/skill-list/skill-list.component';
import { getMockSkills } from '@features/viewer/mock/skill.mock';

@Component({
  selector: 'mcv-skill-list-test',
  standalone: true,
  imports: [
    CommonModule,
    SkillListComponent,
    MatSlideToggleModule,
    FormsModule,
  ],
  template: `
    <aside>
      <mat-slide-toggle color="primary" [(ngModel)]="withLevel">
        withLevel
      </mat-slide-toggle>
    </aside>
    <main>
      <mcv-skill-list
        [title]="title"
        [skills]="skills"
        [withLevel]="withLevel"
      ></mcv-skill-list>
      <pre>{{ skills | json }}</pre>
    </main>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: baseline;

        aside,
        main {
          width: 50%;
          padding: 1rem;
        }
      }
    `,
  ],
})
export class SkillListTestComponent {
  title = 'test';
  skills = getMockSkills();
  withLevel = false;
}
