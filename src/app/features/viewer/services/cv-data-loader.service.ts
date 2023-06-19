import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CurriculumVitaeData } from '../model/cv-data';

@Injectable({
  providedIn: 'root',
})
export class CvDataLoaderService {
  private prefix = '/assets/cv/';
  private suffix = '.json';

  public data = signal<CurriculumVitaeData | null>(null);

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private http: HttpClient
  ) {}

  public request(): void {
    this.data.set(null);
    this.getCV().subscribe({ next: (cv) => this.data.set(cv) });
  }

  private getCV(): Observable<CurriculumVitaeData> {
    return this.http.get<CurriculumVitaeData>(
      `${this.prefix}${this.locale}${this.suffix}`
    );
  }
}
