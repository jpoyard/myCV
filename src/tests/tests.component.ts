import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillListTestComponent } from './features/viewer/skill-list-test.component';

@Component({
  selector: 'mcv-tests',
  standalone: true,
  imports: [CommonModule, SkillListTestComponent],
  template: `<mcv-skill-list-test></mcv-skill-list-test> `,
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
