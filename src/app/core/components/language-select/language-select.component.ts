import { Component, OnDestroy } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SUPPORTED_LANGUAGES } from '../../../model/language';
import { LanguageService } from '../../services/language.service';
import { NgFor } from '@angular/common';

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
export class LanguageSelectComponent implements OnDestroy {
  private subscription: Subscription;

  public supportedLanguages = SUPPORTED_LANGUAGES;

  public languageController = new UntypedFormControl();

  constructor(
    languageService: LanguageService,
    private translateService: TranslateService
  ) {
    this.subscription = languageService.currentLang$.subscribe((lang) =>
      this.languageController.patchValue(lang)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changeLanguage(event: any): void {
    this.translateService.use(event.target.value);
  }
}
