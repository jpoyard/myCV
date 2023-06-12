import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Degree } from '../../model/degree';
import { NgFor } from '@angular/common';

@Component({
    selector: 'mcv-degree-list',
    templateUrl: './degree-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor]
})
export class DegreeListComponent {

  private pDegrees: Degree[] = [];
  @Input()
  public set degrees(value: Degree[]) {
    this.pDegrees = value;
    this.orderedDegrees = this.degrees.sort((a, b) => b.start - a.start);
  }
  public get degrees(): Degree[] {
    return this.pDegrees;
  }

  public orderedDegrees: Degree[] = [];
}
