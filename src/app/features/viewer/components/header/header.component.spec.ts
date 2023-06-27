import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { getMockPreparedCurriculumVitaeData } from '@features/viewer/mock/cv-data.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Given
    component.cv = getMockPreparedCurriculumVitaeData();
    // When
    fixture.detectChanges();
    // Then
    expect(component).toBeTruthy();
  });
});
