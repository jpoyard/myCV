import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SupportedLanguageEnum } from './model/language';

describe(AppComponent.name, () => {
  let spyObjTranslateService: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {

    spyObjTranslateService = jasmine.createSpyObj<TranslateService>(TranslateService.name, ['addLangs', 'setDefaultLang', 'use']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TranslateService, useValue: spyObjTranslateService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myCV'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myCV');
  });

  describe('initilization', () => {
    it('should initialized translate service', () => {
      // Given
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;

      // When
      fixture.detectChanges();

      // Then
      expect(spyObjTranslateService.addLangs).toHaveBeenCalledWith(Object.values(SupportedLanguageEnum));
      expect(spyObjTranslateService.setDefaultLang).toHaveBeenCalledWith(SupportedLanguageEnum.english);
      expect(spyObjTranslateService.use).toHaveBeenCalledWith(SupportedLanguageEnum.english);
    });
  });
});
