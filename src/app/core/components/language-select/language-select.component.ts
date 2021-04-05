import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SUPPORTED_LANGUAGES } from 'src/app/model/language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mcv-language-select',
  template: `
    <select class="form-control" id="languageSelect" (change)="changeLanguage($event)" [formControl]="languageController">
      <ng-container *ngFor="let language of supportedLanguages">
        <option [value]="language.language">{{language.label}}</option>
      </ng-container>
    </select>
  `
})
export class LanguageSelectComponent implements OnDestroy {
  private subscription: Subscription;

  public supportedLanguages = SUPPORTED_LANGUAGES;

  public languageController = new FormControl();

  constructor(
    languageService: LanguageService,
    private translateService: TranslateService
  ) {
    this.subscription = languageService.currentLang$
      .subscribe(lang => this.languageController.patchValue(lang));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changeLanguage(event: any): void {
    this.translateService.use(event.target.value);
  }

}
