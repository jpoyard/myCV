import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Language, LanguageLevelEnum } from '@model/language';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'mcv-languages-list',
  templateUrl: './languages-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatListModule, NgFor, SectionComponent],
  host: {
    class: 'mcv-languages-list',
  },
})
export class LanguagesListComponent {
  private pLanguages: Language[] = [];
  @Input()
  public set languages(value: Language[]) {
    this.pLanguages = value;
    this.orderedLanguages = this.languages.sort(
      (a, b) =>
        LanguagesListComponent.getLevelValue(b) -
        LanguagesListComponent.getLevelValue(a)
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
