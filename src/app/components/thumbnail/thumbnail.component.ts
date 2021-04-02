import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcv-thumbnail',
  template: `
    <img src="assets/thumbnail.png" class="img-fluid rounded border">
  `,
  styles: [
    `:host {
      display: contents;
    }`
  ]
})
export class ThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
