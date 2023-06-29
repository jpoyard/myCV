import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLoaderService } from '@features/viewer/services/icon-loader.service';
import { getMockPreparedCurriculumVitaeData } from 'src/app/mock/cv-data.mock';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: IconLoaderService,
          useValue: { availableIcons: signal([]) },
        },
      ],
      imports: [HeaderComponent],
    });
    TestBed.inject(IconLoaderService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Given
    expect(TestBed.inject(IconLoaderService).availableIcons).toBeTruthy();
    component.cv = getMockPreparedCurriculumVitaeData();
    // When
    fixture.detectChanges();
    // Then
    expect(component).toBeTruthy();
  });
});
