import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DegreesListComponent } from '@features/viewer/components/degrees-list/degrees-list.component';
import { getMockDegrees } from '@features/viewer/mock/degree.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Degree } from '@features/viewer/model/degree';

@Component({
  selector: 'mcv-degrees-list-test',
  standalone: true,
  imports: [
    CommonModule,
    DegreesListComponent,
    MatCheckboxModule,
    OutputTestContainerComponent,
    ReactiveFormsModule,
  ],
  template: `
    <mcv-output-test-container [data]="selectedDegrees">
      <section [formGroup]="degreesFormControl" inputs>
        <h4>Select degrees:</h4>
        <p *ngFor="let degree of degrees">
          <mat-checkbox [formControlName]="degree.name">
            {{ degree.name }}
          </mat-checkbox>
        </p>
      </section>
      <mcv-degrees-list [degrees]="selectedDegrees" output></mcv-degrees-list>
    </mcv-output-test-container>
  `,
})
export class DegreesListTestComponent {
  public degrees = getMockDegrees();
  public degreesFormControl = new FormGroup(
    this.degrees.reduce(
      (acc, degree) => ({ ...acc, [degree.name]: new FormControl(true) }),
      {}
    )
  );
  get selectedDegrees(): Degree[] {
    return this.degrees.filter(
      (value) => (this.degreesFormControl.value as any)[value.name]
    );
  }
}
