import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineNavTestComponent } from './shared/components/timeline-nav-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, TimelineNavTestComponent],
  template: ` <mcv-timeline-nav-test></mcv-timeline-nav-test> `,
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
