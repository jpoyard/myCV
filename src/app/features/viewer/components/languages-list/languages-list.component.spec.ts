import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Language, LanguageLevelEnum } from '../../model/language';

import { LanguagesListComponent } from './languages-list.component';

describe(LanguagesListComponent.name, () => {
  let component: LanguagesListComponent;
  let fixture: ComponentFixture<LanguagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesListComponent);
    component = fixture.componentInstance;
  });

  describe('languages property', () => {
    it(`should display nothing when component.languages isn't initialized`, () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(component.orderedLanguages).toEqual([]);
      expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(0);
    });
    it(`should display ordered (DESC by language.level) language when component.language is defined`, () => {
      // Given
      const languages: Language[] = [
        { name: 'english', level: LanguageLevelEnum.professional },
        { name: 'german', level: LanguageLevelEnum.professional },
        { name: 'french', level: LanguageLevelEnum.native },
      ];
      const expected = [
        { name: 'french', level: LanguageLevelEnum.native },
        { name: 'english', level: LanguageLevelEnum.professional },
        { name: 'german', level: LanguageLevelEnum.professional },
      ];
      component.languages = languages;
      // When
      fixture.detectChanges();
      // Then
      expect(component.orderedLanguages).toEqual(expected);
      // check languages display
      const languageElts = fixture.debugElement.queryAll(By.css('li'));
      languageElts.forEach((languageElt, i) => {
        // name
        expect(
          languageElt.query(By.css('.language')).nativeElement.textContent
        ).toContain(expected[i].name);
        // level
        expect(
          languageElt.query(By.css('.language-level')).nativeElement.textContent
        ).toContain(expected[i].level);
      });
    });
  });
});
