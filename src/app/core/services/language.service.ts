import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLang$: Observable<string>;

  constructor(translateService: TranslateService) {
    this.currentLang$ = translateService.onLangChange.pipe(
      startWith({ lang: translateService.currentLang } as LangChangeEvent),
      map((langChange) => langChange.lang),
      shareReplay(1)
    );
  }
}
