import { NgFor } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  SUPPORTED_LANGUAGES,
  SupportedLanguageEnum,
} from '../../../model/language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mcv-language-select',
  template: `
    <select
      class="form-control"
      id="languageSelect"
      (change)="changeLanguage($event)"
      [formControl]="languageController"
    >
      <ng-container *ngFor="let language of supportedLanguages">
        <option [value]="language.language">{{ language.label }}</option>
      </ng-container>
    </select>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class LanguageSelectComponent {
  public supportedLanguages = SUPPORTED_LANGUAGES;
  public languageController = new UntypedFormControl();

  constructor(
    languageService: LanguageService,
    private translateService: TranslateService
  ) {
    this.languageController.patchValue(languageService.currentLang());
  }

  public changeLanguage(event: Event): void {
    this.translateService.use(this.getLang(event));
  }

  private getLang(event: Event): SupportedLanguageEnum {
    return (event.target as unknown as { value: SupportedLanguageEnum }).value;
  }
}
