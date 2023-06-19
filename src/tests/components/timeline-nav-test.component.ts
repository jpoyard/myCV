import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineNavComponent } from 'src/app/shared/components/timeline-nav/timeline-nav.component';

@Component({
  selector: 'mcv-timeline-nav-test',
  standalone: true,
  imports: [CommonModule, TimelineNavComponent],
  template: `
    <mcv-timeline-nav></mcv-timeline-nav>
  `
})
export class TimelineNavTestComponent {

}
