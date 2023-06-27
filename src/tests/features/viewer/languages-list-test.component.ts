import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LanguagesListComponent } from '@features/viewer/components/languages-list/languages-list.component';
import { getMockLanguages } from '@features/viewer/mock/language.mock';
import { Language } from '@features/viewer/model/language';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-languages-list-test',
  standalone: true,
  imports: [
    LanguagesListComponent,
    MatCheckboxModule,
    OutputTestContainerComponent,
    ReactiveFormsModule,
  ],
  template: `
    <mcv-output-test-container [data]="selectedLanguages">
      <section [formGroup]="languagesFormControl" inputs>
        <h4>Select languages:</h4>
        <p *ngFor="let language of languages">
          <mat-checkbox [formControlName]="language.name">
            {{ language.name }}
          </mat-checkbox>
        </p>
      </section>
      <mcv-languages-list [languages]="selectedLanguages" output>
      </mcv-languages-list>
    </mcv-output-test-container>
  `,
})
export class LanguagesListTestComponent {
  public languages = getMockLanguages();
  public languagesFormControl = new FormGroup(
    this.languages.reduce(
      (acc, language) => ({ ...acc, [language.name]: new FormControl(true) }),
      {}
    )
  );
  get selectedLanguages(): Language[] {
    return this.languages.filter(
      (value) => (this.languagesFormControl.value as any)[value.name]
    );
  }
}
