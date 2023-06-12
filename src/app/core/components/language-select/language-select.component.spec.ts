import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { SupportedLanguageEnum } from '../../../model/language';
import { LanguageService } from '../../services/language.service';

import { LanguageSelectComponent } from './language-select.component';

describe(LanguageSelectComponent.name, () => {
  const currentLang = SupportedLanguageEnum.english;
  let component: LanguageSelectComponent;
  let fixture: ComponentFixture<LanguageSelectComponent>;
  let mockCurrentLang$: BehaviorSubject<string>;
  let spyObjLanguageService: jasmine.SpyObj<LanguageService>;
  let spyObjTranslateService: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    mockCurrentLang$ = new BehaviorSubject<string>(currentLang);
    spyObjLanguageService = jasmine.createSpyObj<LanguageService>
      (LanguageService.name, [], { currentLang$: mockCurrentLang$.asObservable() });
    spyObjTranslateService = jasmine.createSpyObj<TranslateService>(TranslateService.name, ['use']);

    await TestBed.configureTestingModule({
    providers: [
        { provide: LanguageService, useValue: spyObjLanguageService },
        { provide: TranslateService, useValue: spyObjTranslateService }
    ],
    imports: [ReactiveFormsModule, LanguageSelectComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectComponent);
    component = fixture.componentInstance;
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
      fixture.detectChanges();
      // When
      component.changeLanguage({ target: { value: expected } });
      fixture.detectChanges();
      // Then
      expect(spyObjTranslateService.use).toHaveBeenCalledWith(expected);
    });
  });
});
