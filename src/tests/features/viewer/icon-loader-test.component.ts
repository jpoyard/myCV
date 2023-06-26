import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { IconLoaderService } from '@features/viewer/services/icon-loader.service';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-link-with-level-test',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    OutputTestContainerComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
  template: `
    <ng-container *ngIf="selectedIconFormControl.value as selectedIcon">
      <mcv-output-test-container>
        <div inputs>
          <label for="icons">Choose one</label>
          <mat-radio-group
            id="icons"
            class="icons-radio-group"
            [formControl]="selectedIconFormControl"
          >
            <mat-radio-button *ngFor="let icon of icons" [value]="icon">
              {{ icon }}
            </mat-radio-button>
          </mat-radio-group>
        </div>
        <div output>
          <div>
            <mat-icon [svgIcon]="selectedIcon"></mat-icon>
            <i>24px*24px</i>
          </div>
          <div>
            <mat-icon [svgIcon]="selectedIcon" class="big"></mat-icon>
            <i>96px*96px</i>
          </div>
          <div>
            <mat-icon
              [svgIcon]="selectedIcon"
              class="big"
              style="background-color: greenyellow; border: none;"
            ></mat-icon>
            <i>96px*96px</i>
          </div>
        </div>
      </mcv-output-test-container>
    </ng-container>
  `,
  styles: [
    `
      .icons-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }

      div[output] {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: end;
          mat-icon {
            border: 1px solid black;
            margin: 0.2rem 1rem;
          }
        }
      }

      .big {
        width: 96px;
        height: 96px;
      }
    `,
  ],
})
export class IconLoaderTestComponent {
  icons = this.iconLoaderService.availableIcons;
  selectedIconFormControl = new FormControl(this.icons[0]);
  constructor(public iconLoaderService: IconLoaderService) {}
}
