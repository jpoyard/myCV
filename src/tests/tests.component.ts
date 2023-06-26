import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkExperienceTestComponent } from './features/viewer/work-experience-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, WorkExperienceTestComponent],
  template: `<mcv-work-experience-test></mcv-work-experience-test> `,
  styles: [
    `
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class TestsComponent {}
