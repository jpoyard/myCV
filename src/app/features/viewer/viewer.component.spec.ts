import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getMockPreparedCurriculumVitaeData } from './mock/cv-data.mock.spec';
import { CurriculumVitaeDataService } from './services/cv-data.service';
import { ViewerComponent } from './viewer.component';


describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  let spyObjCurriculumVitaeDataService: jasmine.SpyObj<CurriculumVitaeDataService>;

  beforeEach(async () => {
    spyObjCurriculumVitaeDataService = jasmine.createSpyObj<CurriculumVitaeDataService>
      (CurriculumVitaeDataService.name, [], { data$: of(getMockPreparedCurriculumVitaeData()) });
    await TestBed.configureTestingModule({
      declarations: [ViewerComponent],
      providers: [
        { provide: CurriculumVitaeDataService, useValue: spyObjCurriculumVitaeDataService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
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
