import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BootstrapColorEnum } from '../../model/color.enum';
import { Skill } from '../../model/skill';
import { BadgeComponent } from '../badge/badge.component';
import { SkillWithLevelComponent } from '../skill-with-level/skill-with-level.component';

@Component({
  selector: 'mcv-skill-list',
  templateUrl: './skill-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SkillWithLevelComponent,
    BadgeComponent,
    TranslateModule,
  ],
})
export class SkillListComponent implements OnInit {
  @Input() title?: string;
  @Input() skills: Skill[] = [];
  @Input() withLevel = false;

  public BootstrapColorEnum = BootstrapColorEnum;

  public orderedSkills: Skill[] = [];

  ngOnInit(): void {
    this.orderedSkills = this.withLevel
      ? this.skills.sort((a, b) => (b.level || 0) - (a.level || 0))
      : this.skills.sort((a, b) => a.name.localeCompare(b.name));
  }
}
