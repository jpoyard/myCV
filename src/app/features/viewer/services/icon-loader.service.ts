import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from '@core/services/config.service';
import { SvgIcon } from '@model/icon';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconLoaderService {
  public availableIcons = signal<string[]>([]);

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.retrieveAndRegisterSvgIcon();
  }

  private retrieveAndRegisterSvgIcon(): void {
    this.retrieveSvgIcons()
      .pipe(map((icons) => this.registerSvgIcons(icons)))
      .subscribe((availableIcons) => this.availableIcons.set(availableIcons));
  }

  private retrieveSvgIcons(): Observable<SvgIcon[]> {
    return this.http
      .get<SvgIcon[]>(this.configService.externalApi().icons)
      .pipe(catchError(() => of([])));
  }

  private registerSvgIcons(icons: SvgIcon[]): string[] {
    return icons.map((icon) => {
      this.iconRegistry.addSvgIconLiteral(
        icon.name,
        this.sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
      return icon.name;
    });
  }
}
