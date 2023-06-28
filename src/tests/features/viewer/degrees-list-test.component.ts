import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DegreesListComponent } from '@features/viewer/components/degrees-list/degrees-list.component';
import { getMockDegrees } from 'src/app/mock/degree.mock';
import { Degree } from '@model/degree';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-degrees-list-test',
  standalone: true,
  imports: [
    DegreesListComponent,
    MatCheckboxModule,
    NgFor,
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
