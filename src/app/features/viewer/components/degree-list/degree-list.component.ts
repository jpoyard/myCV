import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { getMockDegrees } from '../../mock/degree.mock.spec';
import { Degree } from '../../model/degree';

@Component({
  selector: 'mcv-degree-list',
  templateUrl: './degree-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DegreeListComponent {

  private _degrees: Degree[] = [];
  @Input()
  public set degrees(value: Degree[]) {
    this._degrees = value;
    this.orderedDegrees = this.degrees.sort((a, b) => b.start - a.start)
  }
  public get degrees(): Degree[] {
    return this._degrees;
  }

  public orderedDegrees: Degree[] = [];
}
