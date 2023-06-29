import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { getMockPreparedCurriculumVitaeData } from '@mock/cv-data.mock';
import { PreparedCurriculumVitaeData } from '@model/cv-data';
import { CurriculumVitaeDataService } from './services/cv-data.service';
import { IconLoaderService } from './services/icon-loader.service';
import { ViewerComponent } from './viewer.component';

describe(ViewerComponent.name, () => {
  let component: ViewerComponent;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ViewerComponent],
      providers: [
        {
          provide: CurriculumVitaeDataService,
          useValue: {
            data: signal<PreparedCurriculumVitaeData | null>(
              getMockPreparedCurriculumVitaeData()
            ),
          },
        },
        {
          provide: IconLoaderService,
          useValue: { availableIcons: signal([]) },
        },
        provideRouter([
          {
            path: 'view',
            component: ViewerComponent,
          },
        ]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('view', ViewerComponent);
    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
