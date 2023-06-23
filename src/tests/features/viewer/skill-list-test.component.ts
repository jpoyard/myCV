import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillListComponent } from '@features/viewer/components/skill-list/skill-list.component';
import { getMockSkills } from '@features/viewer/mock/skill.mock';

@Component({
  selector: 'mcv-skill-list-test',
  standalone: true,
  imports: [CommonModule, SkillListComponent],
  template: `
    <aside></aside>
    <main>
      <mcv-skill-list
        [title]="title"
        [skills]="skills"
        [withLevel]="withLevel"
      ></mcv-skill-list>
    </main>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

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
