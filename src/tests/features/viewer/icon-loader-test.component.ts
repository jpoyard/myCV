import { NgFor, NgIf } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { IconLoaderService } from '@features/viewer/services/icon-loader.service';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-link-with-level-test',
  standalone: true,
  imports: [
    MatRadioModule,
    NgFor,
    NgIf,
    OutputTestContainerComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
  template: `
    <ng-container *ngIf="selectedIconFormControl() as formControl">
      <mcv-output-test-container>
        <div inputs>
          <label for="icons">Choose one</label>
          <mat-radio-group
            id="icons"
            class="icons-radio-group"
            [formControl]="formControl"
          >
            <mat-radio-button *ngFor="let icon of icons()" [value]="icon">
              <div class="radio-content">
                <mat-icon [svgIcon]="icon"></mat-icon>
                <span>{{ icon }}</span>
              </div>
            </mat-radio-button>
          </mat-radio-group>
        </div>
        <div output *ngIf="formControl.value as selectedIcon">
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
              style="background-color: black; color: white;"
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

        .radio-content {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          span {
            margin-left: 0.4rem;
          }
        }
      }

      div[output] {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;

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
  get icons(): Signal<string[]> {
    return this.iconLoaderService.availableIcons;
  }
  selectedIconFormControl: Signal<FormControl<string | null>>;

  constructor(public iconLoaderService: IconLoaderService) {
    this.selectedIconFormControl = computed(() => {
      const icon = this.icons()[0];
      return new FormControl<string | null>({
        value: icon,
        disabled: false,
      });
    });
  }
}
