import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language, LanguageLevelEnum } from '../../model/language';

@Component({
  selector: 'mcv-language-list',
  templateUrl: './language-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
})
export class LanguageListComponent {
  private pLanguages: Language[] = [];
  @Input()
  public set languages(value: Language[]) {
    this.pLanguages = value;
    this.orderedLanguages = this.languages.sort(
      (a, b) =>
        LanguageListComponent.getLevelValue(b) -
        LanguageListComponent.getLevelValue(a)
    );
  }
  public get languages(): Language[] {
    return this.pLanguages;
  }

  public orderedLanguages: Language[] = [];

  private static getLevelValue(language: Language): number {
    let result = 0;
    switch (language.level) {
      case LanguageLevelEnum.native:
        result = 2;
        break;
      case LanguageLevelEnum.professional:
      default:
        result = 1;
        break;
    }
    return result;
  }
}
