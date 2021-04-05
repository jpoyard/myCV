import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CvDataLoaderService } from './cv-data-loader.service';
import { getMockCurriculumVitaeData } from '../mock/cv-data.mock.spec';
import { CurriculumVitaeData } from '../model/cv-data';
import { SupportedLanguageEnum } from 'src/app/model/language';

describe(CvDataLoaderService.name, () => {
  let service: CvDataLoaderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataLoaderService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CvDataLoaderService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCv()', () => {
    Object.values(SupportedLanguageEnum).forEach(lang => {
      const url = `/assets/cv/${lang}.json`;
      it(`should return ${lang} CV when ${url} http request succeed`, fakeAsync(() => {
        // Given
        const expected = getMockCurriculumVitaeData();

        // When
        const subscription = service.getCV(lang).subscribe(actual => expect(actual).toEqual(expected), fail);

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
