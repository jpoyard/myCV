import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { SkillWithLevelComponent } from '@features/viewer/components/skill-with-level/skill-with-level.component';
import { getMockSkills } from 'src/app/mock/skill.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-skill-with-level-test',
  standalone: true,
  imports: [
    MatRadioModule,
    NgIf,
    OutputTestContainerComponent,
    ReactiveFormsModule,
    SkillWithLevelComponent,
  ],
  template: `
    <ng-container *ngIf="selectedSkillFormControl.value as selectedSkill">
      <mcv-output-test-container [data]="selectedSkill">
        <div inputs>
          <label for="skills">Choose one</label>
          <mat-radio-group
            id="skills"
            class="skills-radio-group"
            [formControl]="selectedSkillFormControl"
          >
            <mat-radio-button *ngFor="let skill of skills" [value]="skill">
              {{ skill.name }}
            </mat-radio-button>
          </mat-radio-group>
        </div>
        <mcv-skill-with-level [skill]="selectedSkill" output>
        </mcv-skill-with-level>
      </mcv-output-test-container>
    </ng-container>
  `,
  styles: [
    `
      .skills-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }
    `,
  ],
})
export class SkillWithLevelTestComponent {
  skills = getMockSkills().sort((a, b) => a.name.localeCompare(b.name));
  selectedSkillFormControl = new FormControl(this.skills[0], [
    Validators.required,
  ]);
}
