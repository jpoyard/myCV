import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { SupportedLanguageEnum } from '../../../model/language';
import { getMockCurriculumVitaeData } from '../mock/cv-data.mock';
import { CvDataLoaderService } from './cv-data-loader.service';

describe(CvDataLoaderService.name, () => {
  let service: CvDataLoaderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataLoaderService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CvDataLoaderService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCv()', () => {
    Object.values(SupportedLanguageEnum).forEach((lang) => {
      const url = `/assets/cv/${lang}.json`;
      it(`should return ${lang} CV when ${url} http request succeed`, fakeAsync(() => {
        // Given
        const expected = getMockCurriculumVitaeData();

        // When
        const subscription = service.getCV(lang).subscribe({
          next: (actual) => expect(actual).toEqual(expected),
          error: (err) => fail(err),
        });

        // Then
        const httpRequest = httpTestingController.expectOne(url);
        expect(httpRequest.request.method).toBe('GET');
        httpRequest.flush(expected);
        flushMicrotasks();
        subscription.unsubscribe();
      }));
    });
  });
});
