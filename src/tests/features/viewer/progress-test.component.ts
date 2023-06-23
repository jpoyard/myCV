import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressComponent } from '@features/viewer/components/progress/progress.component';

@Component({
  selector: 'mcv-progress-test',
  standalone: true,
  imports: [CommonModule, ProgressComponent],
  template: `
    <aside></aside>
    <main>
      <mcv-progress [value]="value" [content]="content"></mcv-progress>
    </main>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        aside, main {
          width: 50%;
          padding: 1rem;
        }
      }
    `,
  ],
})
export class ProgressTestComponent {
  value = 50;
  content = 'test';
}
