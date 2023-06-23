import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SkillWithLevelComponent } from '@features/viewer/components/skill-with-level/skill-with-level.component';
import { getMockSkills } from '@features/viewer/mock/skill.mock';

@Component({
  selector: 'mcv-skill-with-level-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    SkillWithLevelComponent,
  ],
  template: `
    <aside>
      <mat-form-field>
        <mat-label>Choose one</mat-label>
        <mat-select [formControl]="selectedSkillFormControl">
          <mat-option *ngFor="let skill of skills" [value]="skill">
            {{ skill.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </aside>
    <main *ngIf="selectedSkillFormControl.value as selectedSkill">
      <mcv-skill-with-level [skill]="selectedSkill"></mcv-skill-with-level>
      <pre>{{ selectedSkill | json }}</pre>
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
export class SkillWithLevelTestComponent {
  skills = getMockSkills().sort((a, b) => a.name.localeCompare(b.name));
  selectedSkillFormControl = new FormControl(this.skills[0], [
    Validators.required,
  ]);
}
