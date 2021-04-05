import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportedLanguageEnum } from '../../../model/language';
import { CurriculumVitaeData } from '../model/cv-data';

@Injectable({
  providedIn: 'root'
})
export class CvDataLoaderService {
  private prefix = '/assets/cv/';
  private suffix = '.json';

  constructor(private http: HttpClient) { }

  public getCV(lang: SupportedLanguageEnum): Observable<CurriculumVitaeData> {
    return this.http.get<CurriculumVitaeData>(`${this.prefix}${lang}${this.suffix}`);
  }
}
