import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';
import { WorkExperience } from '../../model/work-experience';
import { SkillListComponent } from '../skill-list/skill-list.component';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SkillListComponent,
    AsyncPipe,
    DatePipe,
    TranslateModule,
  ],
})
export class WorkExperienceComponent {
  @Input() public workExperience?: WorkExperience;

  constructor(public languageService: LanguageService) {}
}
