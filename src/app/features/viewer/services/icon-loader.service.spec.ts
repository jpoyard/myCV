import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ConfigService,
  ExternalApiConfig,
} from '@core/services/config.service';
import { getMockSvgIcons } from '@mock/icons.mock';
import { IconLoaderService } from './icon-loader.service';

describe(IconLoaderService.name, () => {
  let service: IconLoaderService;
  let httpTestingController: HttpTestingController;

  const externalApi: ExternalApiConfig = {
    icons: '/api/icons',
  };
  const expectedIcons = getMockSvgIcons();
  const expectedAvailableIcons = expectedIcons.map((icon) => icon.name);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatIconRegistry,
          useValue: { addSvgIconLiteral: jest.fn() },
        },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: jest.fn().mockImplementation((svg) => svg),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            externalApi: signal(externalApi),
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('availableIcons', () => {
    test('should be defined when request succeeed', () => {
      // Given
      service = TestBed.inject(IconLoaderService);
      // When
      const req = httpTestingController.expectOne((req) =>
        req.url.includes(externalApi.icons)
      );
      // Then
      expect(req.request.method).toEqual('GET');
      req.flush(expectedIcons);
      expect(service.availableIcons()).toEqual(expectedAvailableIcons);
    });

    test('should be empty when request failed', fakeAsync(() => {
      // Given
      service = TestBed.inject(IconLoaderService);
      // When
      const req = httpTestingController.expectOne((req) =>
        req.url.includes(externalApi.icons)
      );
      flushMicrotasks();
      // Then
      expect(req.request.method).toEqual('GET');
      req.flush(
        { error: 'an error with status = 500' },
        {
          status: 500,
          statusText: 'Server error',
        }
      );
      flushMicrotasks();
      expect(service.availableIcons()).toEqual([]);
    }));
  });
});
