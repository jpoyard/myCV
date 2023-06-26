import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';

describe(WorkExperienceComponent.name, () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Given
    component.workExperience = getMockWorkExperiences()[0];
    // When
    fixture.detectChanges();
    // Then
    expect(component).toBeTruthy();
  });
});
