import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SupportedLanguageEnum } from '../../../model/language';
import { LanguageService } from '../../services/language.service';

import { LanguageSelectComponent } from './language-select.component';

describe(LanguageSelectComponent.name, () => {
  const currentLang = SupportedLanguageEnum.english;
  let component: LanguageSelectComponent;
  let fixture: ComponentFixture<LanguageSelectComponent>;
  let mockCurrentLang$: Subject<string>;
  let mockLanguageService: { currentLang$: Observable<string> };
  /*eslint @typescript-eslint/no-explicit-any : "off"*/
  let mockTranslateService: { use(lang: string): Observable<any> };

  beforeEach(async () => {
    mockCurrentLang$ = new BehaviorSubject<string>(currentLang);
    mockLanguageService = { currentLang$: mockCurrentLang$.asObservable() };
    mockTranslateService = { use: jest.fn() };

    await TestBed.configureTestingModule({
      providers: [
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: TranslateService, useValue: mockTranslateService },
      ],
      imports: [ReactiveFormsModule, LanguageSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    mockCurrentLang$.complete();
  });

  it('should create with currentLang', () => {
    // Given
    // When
    fixture.detectChanges();
    // Then
    expect(component).toBeTruthy();
    expect(component.languageController.value).toBe(currentLang);
  });

  describe('changeLanguage()', () => {
    it('should change language when method is called', () => {
      // Given
      const expected = SupportedLanguageEnum.french;
      const $event = { target: { value: expected } } as unknown as Event;
      fixture.detectChanges();
      // When
      component.changeLanguage($event);
      fixture.detectChanges();
      // Then
      expect(mockTranslateService.use).toHaveBeenCalledWith(expected);
    });
  });
});
