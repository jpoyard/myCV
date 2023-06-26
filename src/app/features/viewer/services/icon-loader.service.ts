import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getMockSvgIcons } from '../mock/icons.mock';

@Injectable({
  providedIn: 'root',
})
export class IconLoaderService {
  public availableIcons: string[] = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    getMockSvgIcons().forEach((icon) => {
      iconRegistry.addSvgIconLiteral(
        icon.name,
        sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
      this.availableIcons.push(icon.name);
    });
  }
}
