import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperience } from '@features/viewer/model/work-experience';
import { TimelineNavComponent } from './timeline-nav.component';
import { differenceInMonths } from 'date-fns';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';

describe(TimelineNavComponent.name, () => {
  let component: TimelineNavComponent;
  let fixture: ComponentFixture<TimelineNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimelineNavComponent],
    });
    fixture = TestBed.createComponent(TimelineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.each([
    {
      title: 'should have timeline=null when workExperiences is empty',
      when: [] as WorkExperience[],
      then: null,
    },
    {
      title: 'should have expected timeline when workExperiences.length=1',
      when: [
        {
          jobTitle: 'jobTitle1',
          period: {
            start: new Date('2015-05-01'),
            end: new Date('2020-12-31'),
          },
        } as unknown as WorkExperience,
      ],
      then: {
        sumOfMonths: 67,
        periods: [
          {
            title: 'jobTitle1',
            active: false,
            id: 0,
            sumOfMonths: 67,
            start: new Date('2015-05-01'),
            end: new Date('2020-12-31'),
          },
        ],
      },
    },
    {
      title: 'should have expected timeline when workExperiences.length=1',
      when: [
        {
          jobTitle: 'jobTitle1',
          period: { start: new Date('2015-05-01') },
        } as unknown as WorkExperience,
      ],
      then: {
        sumOfMonths: differenceInMonths(new Date(), new Date('2015-05-01')),
        periods: [
          {
            title: 'jobTitle1',
            active: false,
            id: 0,
            sumOfMonths: differenceInMonths(new Date(), new Date('2015-05-01')),
            start: new Date('2015-05-01'),
          },
        ],
      },
    },
    {
      title: 'should have expected timeline when workExperiences.length=2',
      when: [
        {
          jobTitle: 'jobTitle2',
          period: {
            start: new Date('2020-12-01'),
            end: new Date('2023-07-31'),
          },
        } as unknown as WorkExperience,
        {
          jobTitle: 'jobTitle1',
          period: {
            start: new Date('2015-05-01'),
            end: new Date('2020-11-31'),
          },
        } as unknown as WorkExperience,
      ],
      then: {
        sumOfMonths: 97,
        periods: [
          {
            title: 'jobTitle2',
            active: false,
            id: 0,
            sumOfMonths: 31,
            start: new Date('2020-12-01'),
            end: new Date('2023-07-31'),
          },
          {
            title: 'jobTitle1',
            active: false,
            id: 1,
            sumOfMonths: 66,
            start: new Date('2015-05-01'),
            end: new Date('2020-11-31'),
          },
        ],
      },
    },
  ])('%s', ({ when, then }) => {
    // Given
    component.workExperiences = when;
    // When
    component.ngOnChanges({
      workExperiences: {
        previousValue: [],
        currentValue: when,
        firstChange: true,
        isFirstChange: jest.fn(() => true),
      },
    });
    // Then
    expect(component.timeline).toEqual(then);
  });

  describe('onMouseEnter', () => {
    test('should set period.active=true when mouse enter', () => {
      // Given
      component.workExperiences = getMockWorkExperiences();
      component.ngOnChanges({
        workExperiences: {
          previousValue: [],
          currentValue: component.workExperiences,
          firstChange: true,
          isFirstChange: jest.fn(() => true),
        },
      });
      const period = component.timeline!.periods[0];
      expect(period.active).toBe(false);

      // When
      component.onMouseEnter(period);

      // Then
      expect(period.active).toBe(true);
    });
  });

  describe('onMouseLeave', () => {
    test('should set period.active=false when mouse leave and period.active=false', () => {
      // Given
      component.workExperiences = getMockWorkExperiences();
      component.ngOnChanges({
        workExperiences: {
          previousValue: [],
          currentValue: component.workExperiences,
          firstChange: true,
          isFirstChange: jest.fn(() => true),
        },
      });
      const period = component.timeline!.periods[0];
      component.onMouseEnter(period);
      expect(period.active).toBe(true);

      // When
      component.onMouseLeave(period);

      // Then
      expect(period.active).toBe(false);
    });
  });

  describe('onSelect', () => {
    test('should select period when user click on period and selectedPeriodId=null', () => {
      // Given
      const event = { stopPropagation: jest.fn() } as unknown as MouseEvent;

      component.workExperiences = getMockWorkExperiences();
      component.ngOnChanges({
        workExperiences: {
          previousValue: [],
          currentValue: component.workExperiences,
          firstChange: true,
          isFirstChange: jest.fn(() => true),
        },
      });
      const period = component.timeline!.periods[0];
      expect(component.selectedPeriodId()).toBeNull();

      // When
      component.onSelect(event, period);

      // Then
      expect(component.selectedPeriodId()).toBe(period.id);
    });
    test('should unselect period when user click on period and selectedPeriodId=period.id', () => {
      // Given
      const event = { stopPropagation: jest.fn() } as unknown as MouseEvent;

      component.workExperiences = getMockWorkExperiences();
      component.ngOnChanges({
        workExperiences: {
          previousValue: [],
          currentValue: component.workExperiences,
          firstChange: true,
          isFirstChange: jest.fn(() => true),
        },
      });
      const period = component.timeline!.periods[0];
      component.onSelect(event, period);
      expect(component.selectedPeriodId()).toBe(period.id);

      // When
      component.onSelect(event, period);

      // Then
      expect(component.selectedPeriodId()).toBeNull();
    });
  });
});
