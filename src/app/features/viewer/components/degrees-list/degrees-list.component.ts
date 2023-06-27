import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Degree } from '../../model/degree';

@Component({
  selector: 'mcv-degrees-list',
  templateUrl: './degrees-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatListModule, NgFor],
  host: {
    class: 'mcv-degrees-list',
  },
})
export class DegreesListComponent {
  private _degrees: Degree[] = [];
  @Input()
  public set degrees(value: Degree[]) {
    this._degrees = value;
    this.orderedDegrees = this.degrees.sort((a, b) => b.start - a.start);
  }
  public get degrees(): Degree[] {
    return this._degrees;
  }

  public orderedDegrees: Degree[] = [];
}
