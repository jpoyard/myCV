import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../section/section.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

import { WorkExperienceListComponent } from './work-experience-list.component';

describe('WorkExperienceListComponent', () => {
  let component: WorkExperienceListComponent;
  let fixture: ComponentFixture<WorkExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WorkExperienceListComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
