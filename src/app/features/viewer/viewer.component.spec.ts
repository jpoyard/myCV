import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { getMockPreparedCurriculumVitaeData } from './mock/cv-data.mock';
import { CurriculumVitaeDataService } from './services/cv-data.service';
import { ViewerComponent } from './viewer.component';

describe(ViewerComponent.name, () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), ViewerComponent],
      providers: [
        {
          provide: CurriculumVitaeDataService,
          useValue: { data$: of(getMockPreparedCurriculumVitaeData()) },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
