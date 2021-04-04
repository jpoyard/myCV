import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcv-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
