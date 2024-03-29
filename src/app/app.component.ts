import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSelectComponent } from './core/components/language-select/language-select.component';
import { SupportedLanguageEnum } from './model/language';

@Component({
  selector: 'mcv-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, LanguageSelectComponent, TranslateModule],
})
export class AppComponent {
  title = 'myCV';

  constructor(translate: TranslateService) {
    translate.addLangs(Object.values(SupportedLanguageEnum));
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(SupportedLanguageEnum.english);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(SupportedLanguageEnum.english);
  }
}
