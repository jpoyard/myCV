import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { Skill } from '../../model/skill';
import { SkillWithLevelComponent } from '../skill-with-level/skill-with-level.component';

@Component({
  selector: 'mcv-skills-list',
  templateUrl: './skills-list.component.html',
  styles: [
    `
      :host {
        mat-chip-listbox {
          padding: 1rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SkillWithLevelComponent,
    MatChipsModule,
    MatListModule,
  ],
  host: {
    class: 'mcv-skills-list',
  },
})
export class SkillsListComponent implements OnChanges {
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
