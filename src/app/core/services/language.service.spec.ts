import { EventEmitter } from '@angular/core';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SupportedLanguageEnum } from 'src/app/model/language';

import { LanguageService } from './language.service';

describe(LanguageService.name, () => {
  const currentLang = SupportedLanguageEnum.english;
  let service: LanguageService;
  let mockLangChangeEvent: EventEmitter<LangChangeEvent>;
  let spyObjTranslateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    mockLangChangeEvent = new EventEmitter<LangChangeEvent>();
    spyObjTranslateService = jasmine.createSpyObj<TranslateService>(TranslateService.name, [], {
      onLangChange: mockLangChangeEvent,
      currentLang
    })
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: spyObjTranslateService }
      ]
    });
    service = TestBed.inject(LanguageService);
  });

  describe('currentLang$ property', () => {
    it(`should return '${currentLang}' when currentLang='${currentLang}'`, fakeAsync(() => {
      // Given
      const expected = currentLang;
      let actual;

      // When
      const subscription = service.currentLang$.subscribe(v => actual = v);
      flushMicrotasks();
      subscription.unsubscribe();

      // Then
      expect(actual).toBeTruthy(expected);
    }));
    [SupportedLanguageEnum.french].forEach(
      expected => {
        it(`should return '${expected}' when currentLang='${currentLang}' and onLangChange emit {lang: '${expected}'}`, fakeAsync(() => {
          // Given
          const expected = SupportedLanguageEnum.french;
          let actual;

          mockLangChangeEvent.emit({ lang: expected } as LangChangeEvent);

          // When
          const subscription = service.currentLang$.subscribe(v => actual = v);
          flushMicrotasks();
          subscription.unsubscribe();

          // Then
          expect(actual).toBeTruthy(expected);
        }));
      }
    )
  });
});
