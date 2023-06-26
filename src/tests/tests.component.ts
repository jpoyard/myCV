import { Component } from '@angular/core';

@Component({
  selector: 'mcv-tests',
  template: `<router-outlet></router-outlet>`,
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
