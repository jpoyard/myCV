import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineNavTestComponent } from './components/timeline-nav-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, TimelineNavTestComponent],
  template: `
   <mcv-timeline-nav-test></mcv-timeline-nav-test>
  `,
})
export class TestsComponent {

}
