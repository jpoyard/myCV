import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mcv-section',
  template: `<mat-card>
    <mat-card-header>
      <mat-card-title class="section-title">{{ title }}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <ng-content></ng-content>
    </mat-card-content>
  </mat-card>`,
  styles: [
    `
      :host {
        display: block;

        mat-card-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
          gap: 0.6rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule],
})
export class SectionComponent {
  @Input() public title = 'no-title';
}
