import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillWithLevelTestComponent } from './features/viewer/skill-with-level-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, SkillWithLevelTestComponent],
  template: `<mcv-skill-with-level-test></mcv-skill-with-level-test> `,
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
