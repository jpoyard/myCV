import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { getMockPreparedCurriculumVitaeData } from './mock/cv-data.mock';
import { PreparedCurriculumVitaeData } from './model/cv-data';
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
          useValue: { data: signal<PreparedCurriculumVitaeData|null>(getMockPreparedCurriculumVitaeData()) },
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
