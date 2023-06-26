import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { WorkExperienceComponent } from '@features/viewer/components/work-experience/work-experience.component';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-work-experience-test',
  standalone: true,
  imports: [
    CommonModule,
    WorkExperienceComponent,
    OutputTestContainerComponent,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  template: ` <mcv-output-test-container
    [data]="selectedWorkExperienceFormControl.value"
  >
    <div inputs>
      <label for="work-experiences" >Choose one</label>
      <mat-radio-group
        id="work-experiences"
        class="work-experiences-radio-group"
        [formControl]="selectedWorkExperienceFormControl"
      >
        <mat-radio-button
          *ngFor="let workExperience of workExperiences"
          [value]="workExperience"
        >
          {{ workExperience.jobTitle }}
        </mat-radio-button>
      </mat-radio-group>
    </div>
    <mcv-work-experience
      [workExperience]="selectedWorkExperienceFormControl.value!"
      output
    >
    </mcv-work-experience>
  </mcv-output-test-container>`,
  styles: [
    `
      .work-experiences-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }
    `,
  ],
})
export class WorkExperienceTestComponent {
  workExperiences = getMockWorkExperiences();
  selectedWorkExperienceFormControl = new FormControl(this.workExperiences[0]);
}
