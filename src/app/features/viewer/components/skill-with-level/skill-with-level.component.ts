import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../model/skill';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'mcv-skill-with-level',
  template: ` <ng-container *ngIf="skill">
    <mcv-progress
      *ngIf="skill.level"
      [content]="skill.name"
      [value]="skill.level"
    ></mcv-progress>
  </ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ProgressComponent],
})
export class SkillWithLevelComponent {
  @Input() public skill?: Skill;
}
