import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { SupportedLanguageEnum } from 'src/app/model/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLang: Signal<SupportedLanguageEnum>;

  constructor(translateService: TranslateService) {
    this.currentLang = toSignal<SupportedLanguageEnum, SupportedLanguageEnum>(
      translateService.onLangChange.pipe(
        map((langChange) => langChange.lang as SupportedLanguageEnum)
      ),
      { initialValue: translateService.currentLang as SupportedLanguageEnum }
    );
  }
}
