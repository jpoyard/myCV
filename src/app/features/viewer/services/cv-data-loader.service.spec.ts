import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { getMockCurriculumVitaeData } from '@mock/cv-data.mock';
import { CvDataLoaderService } from './cv-data-loader.service';
import { HttpClient } from '@angular/common/http';

describe(CvDataLoaderService.name, () => {
  let service: CvDataLoaderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCv()', () => {
    ['en', 'fr'].forEach((lang) => {
      const url = `/assets/cv/${lang}.json`;
      it(`should return ${lang} CV when ${url} http request succeed`, fakeAsync(() => {
        // Given
        service = new CvDataLoaderService(lang, TestBed.inject(HttpClient));
        const expected = getMockCurriculumVitaeData();

        // When
        service.request();

        // Then
        const httpRequest = httpTestingController.expectOne(url);
        expect(httpRequest.request.method).toBe('GET');
        httpRequest.flush(expected);
        flushMicrotasks();

        expect(service.data()).toEqual(expected);
      }));
    });
  });
});
