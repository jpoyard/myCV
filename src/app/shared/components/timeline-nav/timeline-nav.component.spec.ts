import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperience } from '@features/viewer/model/work-experience';
import { TimelineNavComponent } from './timeline-nav.component';
import { differenceInMonths } from 'date-fns';

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
          period: { start: new Date('2015-05-01'), end: new Date('2020-12-31') },
        } as unknown as WorkExperience,
      ],
      then: {
        sumOfMonths: 67,
        periods: [
          {
            title: 'jobTitle1',
            active: false,
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
            sumOfMonths: differenceInMonths(new Date(), new Date('2015-05-01')),
            start: new Date('2015-05-01'),
          },
        ],
      },
    },
    {
      title:
        'should have expected timeline when workExperiences.length=2',
      when: [
        {
          jobTitle: 'jobTitle2',
          period: { start: new Date('2020-12-01'),
          end: new Date('2023-07-31') },
        } as unknown as WorkExperience,
        {
          jobTitle: 'jobTitle1',
          period: { start: new Date('2015-05-01'), end: new Date('2020-11-31') },
        } as unknown as WorkExperience,
      ],
      then: {
        sumOfMonths: 97,
        periods: [
          {
            title: 'jobTitle2',
            active: false,
            sumOfMonths: 31,
            start: new Date('2020-12-01'),
            end: new Date('2023-07-31')
          },
          {
            title: 'jobTitle1',
            active: false,
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
});
