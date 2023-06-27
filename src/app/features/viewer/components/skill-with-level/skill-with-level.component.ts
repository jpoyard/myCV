import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Skill } from '../../model/skill';

@Component({
  selector: 'mcv-skill-with-level',
  template: `<b>{{ skill.name }}</b>
    <mat-progress-bar [color]="color" mode="determinate" [value]="skill.level">
    </mat-progress-bar>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, MatProgressBarModule],
  host: {
    class: 'mcv-skill-with-level',
  },
})
export class SkillWithLevelComponent {
  @Input({ required: true }) public skill!: Skill;
  public get color(): string {
    return this.skill.level == null || this.skill.level === 0
      ? 'warn'
      : 'primary';
  }
}
