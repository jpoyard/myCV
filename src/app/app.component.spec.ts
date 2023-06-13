import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SupportedLanguageEnum } from './model/language';

describe(AppComponent.name, () => {
  let spyOnAddLangs: jasmine.Spy;
  let spyOnSetDefaultLang: jasmine.Spy;
  let spyOnUse: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    spyOnAddLangs = spyOn(TestBed.inject(TranslateService), 'addLangs');
    spyOnSetDefaultLang = spyOn(
      TestBed.inject(TranslateService),
      'setDefaultLang'
    );
    spyOnUse = spyOn(TestBed.inject(TranslateService), 'use');
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

      // When
      fixture.detectChanges();

      // Then
      expect(spyOnAddLangs).toHaveBeenCalledWith(
        Object.values(SupportedLanguageEnum)
      );
      expect(spyOnSetDefaultLang).toHaveBeenCalledWith(
        SupportedLanguageEnum.english
      );
      expect(spyOnUse).toHaveBeenCalledWith(SupportedLanguageEnum.english);
    });
  });
});
