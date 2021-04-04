import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcv-thumbnail',
  template: `
    <img src="https://avatars.githubusercontent.com/u/10052221?s=300&u=c7f0a14b253da712b9c86661bbc148281bb220d1&v=4" class="img-fluid">
  `,
  styles: [
    `:host {
      display: contents;
    }`
  ]
})
export class ThumbnailComponent {}
