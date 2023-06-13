import { EventEmitter } from '@angular/core';
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SupportedLanguageEnum } from '../../model/language';

import { firstValueFrom } from 'rxjs';
import { LanguageService } from './language.service';

describe(LanguageService.name, () => {
  const currentLang = SupportedLanguageEnum.english;
  let service: LanguageService;
  let mockLangChangeEvent$: EventEmitter<LangChangeEvent>;
  let mockTranslateService: {
    onLangChange: EventEmitter<LangChangeEvent>;
    currentLang: SupportedLanguageEnum;
  };

  beforeEach(() => {
    mockLangChangeEvent$ = new EventEmitter<LangChangeEvent>();
    mockTranslateService = {
      onLangChange: mockLangChangeEvent$,
      currentLang,
    };
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: mockTranslateService },
      ],
    });
    service = TestBed.inject(LanguageService);
  });

  afterAll(() => {
    mockLangChangeEvent$.complete();
  });

  describe('currentLang$ property', () => {
    it(`should return '${currentLang}' when currentLang='${currentLang}'`, fakeAsync(async () => {
      // Given

      // When
      flushMicrotasks();

      // Then
      expect(await firstValueFrom(service.currentLang$)).toBe(currentLang);
    }));

    [SupportedLanguageEnum.french].forEach((expected) => {
      it(`should return '${expected}' when currentLang='${currentLang}' and onLangChange emit {lang: '${expected}'}`, fakeAsync(async () => {
        // Given
        flushMicrotasks();

        // When
        expect(await firstValueFrom(service.currentLang$)).toBe(currentLang);
        mockLangChangeEvent$.emit({ lang: expected } as LangChangeEvent);

        // Then
        expect(await firstValueFrom(service.currentLang$)).toBe(expected);
      }));
    });
  });
});
