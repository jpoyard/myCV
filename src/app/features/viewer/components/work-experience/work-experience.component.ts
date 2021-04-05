import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { WorkExperience } from '../../model/work-experience';

@Component({
  selector: 'mcv-work-experience',
  templateUrl: './work-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {

  @Input() public workExperience?: WorkExperience;

  constructor(public languageService: LanguageService) { }
}
