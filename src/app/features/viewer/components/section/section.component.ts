import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent  {
  @Input() public title: string = 'no-title';
}