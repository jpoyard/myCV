import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { SupportedLanguageEnum } from './model/language';

registerLocaleData(localeFr, SupportedLanguageEnum.french);
registerLocaleData(localeEn, SupportedLanguageEnum.english);

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http);
}
