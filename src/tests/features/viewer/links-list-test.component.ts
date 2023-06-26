import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { LinksListComponent } from '@features/viewer/components/links-list/links-list.component';
import {
  getMockPrimaryLinks,
  getMockSecondaryLinks,
} from '@features/viewer/mock/link.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-links-list-test',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    OutputTestContainerComponent,
    ReactiveFormsModule,
    LinksListComponent,
  ],
  template: `
    <ng-container *ngIf="selectedGroupFormControl.value as selectedGroup">
      <mcv-output-test-container [data]="selectedGroup">
        <div inputs>
          <label for="links">Choose one</label>
          <mat-radio-group
            id="links"
            class="links-radio-group"
            [formControl]="selectedGroupFormControl"
          >
            <mat-radio-button *ngFor="let group of groups" [value]="group">
              {{ group.name }}
            </mat-radio-button>
          </mat-radio-group>
        </div>
        <mcv-links-list [links]="selectedGroup.links" output> </mcv-links-list>
      </mcv-output-test-container>
    </ng-container>
  `,
  styles: [
    `
      .links-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }
    `,
  ],
})
export class linksListTestComponent {
  groups = [
    { name: 'Primary links', links: [...getMockPrimaryLinks()] },
    { name: 'Web site links', links: [...getMockSecondaryLinks()] },
  ];
  selectedGroupFormControl = new FormControl(this.groups[0], [
    Validators.required,
  ]);
}
