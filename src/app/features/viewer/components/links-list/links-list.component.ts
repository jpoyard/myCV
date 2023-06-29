import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IconLoaderService } from '@features/viewer/services/icon-loader.service';
import { Link } from '@model/link';

@Component({
  selector: 'mcv-links-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let link of links">
        <mat-icon
          *ngIf="hasIcon(link.icon)()"
          matListItemIcon
          [svgIcon]="link.icon"
        >
        </mat-icon>
        <a
          matListItemTitle
          mat-flat-button
          [attr.href]="link.url"
          target="_blank"
        >
          {{ link.label }}
        </a>
      </mat-list-item>
    </mat-list>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
        .mdc-list-item--with-leading-icon .mdc-list-item__start {
          margin: 0px;
        }
      }
    `,
  ],
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule, MatListModule, MatButtonModule],
  host: {
    class: 'mcv-links-list',
  },
})
export class LinksListComponent {
  @Input() public links: Link[] = [];

  constructor(private iconLoaderService: IconLoaderService) {}

  public hasIcon(icon?: string | null): Signal<boolean> {
    return computed(
      () =>
        icon != null && this.iconLoaderService.availableIcons().includes(icon)
    );
  }
}
