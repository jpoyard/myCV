import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'mcv-skill-with-level',
  template: `
<ng-container *ngIf="skill">
  <div class="skill-name">{{ skill.name }}</div>
  <mcv-progress *ngIf="skill.level" [value]="skill.level"></mcv-progress>
</ng-container>`,
})
export class SkillWithLevelComponent {
  @Input() public skill?: Skill;
}
