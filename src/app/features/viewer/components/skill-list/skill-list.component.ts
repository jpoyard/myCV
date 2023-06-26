import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Skill } from '../../model/skill';
import { SkillWithLevelComponent } from '../skill-with-level/skill-with-level.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'mcv-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SkillWithLevelComponent,
    MatChipsModule,
    MatListModule,
  ],
})
export class SkillListComponent implements OnChanges {
  @Input() title?: string;
  @Input() skills: Skill[] = [];
  @Input() withLevel = false;

  public orderedSkills: Skill[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skills']) {
      this.orderedSkills = this.withLevel
        ? this.skills.sort((a, b) => (b.level || 0) - (a.level || 0))
        : this.skills.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
}
