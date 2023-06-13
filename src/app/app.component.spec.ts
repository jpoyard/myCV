import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { SupportedLanguageEnum } from './model/language';

describe(AppComponent.name, () => {
  let mockLangChangeEvent: EventEmitter<LangChangeEvent>;
  let mockTranslateService: {
    onLangChange: EventEmitter<LangChangeEvent>;
    addLangs(langs: Array<string>): void;
    setDefaultLang(lang: string): void;
    /*eslint @typescript-eslint/no-explicit-any : "off"*/
    use(lang: string): Observable<any>;
  };

  beforeEach(async () => {
    mockLangChangeEvent = new EventEmitter<LangChangeEvent>();
    mockTranslateService = {
      onLangChange: mockLangChangeEvent,
      addLangs: jest.fn(),
      setDefaultLang: jest.fn(),
      use: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppComponent],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  afterEach(() => {
    mockLangChangeEvent.complete();
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
      expect(mockTranslateService.addLangs).toHaveBeenCalledWith(
        Object.values(SupportedLanguageEnum)
      );
      expect(mockTranslateService.setDefaultLang).toHaveBeenCalledWith(
        SupportedLanguageEnum.english
      );
      expect(mockTranslateService.use).toHaveBeenCalledWith(
        SupportedLanguageEnum.english
      );
    });
  });
});
