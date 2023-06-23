import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressTestComponent } from './features/viewer/progress-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, ProgressTestComponent],
  template: `<mcv-progress-test></mcv-progress-test> `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class TestsComponent {}
