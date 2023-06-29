import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WorkExperience } from '@model/work-experience';
import { FormatDatePipe } from 'src/app/shared/pipe/format-date/format-date.pipe';
import { SkillsListComponent } from '../skills-list/skills-list.component';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 0.2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, SkillsListComponent, FormatDatePipe, MatCardModule],
  host: {
    class: 'mcv-work-experience',
  },
})
export class WorkExperienceComponent {
  @Input({ required: true })
  public workExperience!: WorkExperience;
}
