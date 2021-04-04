import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BootstrapColorEnum } from 'src/app/features/viewer/model/color.enum';
import { Skill } from 'src/app/features/viewer/model/skill';

@Component({
  selector: 'mcv-skill-list',
  templateUrl: './skill-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillListComponent implements OnInit {

  @Input() title?: string;
  @Input() skills: Skill[] = [];
  @Input() withLevel = false;

  public BootstrapColorEnum = BootstrapColorEnum;

  public orderedSkills: Skill[] = [];

  ngOnInit(): void {
    this.orderedSkills = (this.withLevel)
      ? this.skills.sort((a, b) => (a.level || 0) - (b.level || 0))
      : this.skills.sort((a, b) => a.name.localeCompare(b.name));
  }
}
