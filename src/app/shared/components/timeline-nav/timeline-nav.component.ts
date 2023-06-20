import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { differenceInMonths } from 'date-fns';
import {
  WorkExperience,
  WorkExperiencePeriod,
} from 'src/app/features/viewer/model/work-experience';
import { FormatDatePipe } from '../../pipe/format-date/format-date.pipe';

interface Period extends WorkExperiencePeriod {
  title: string;
  active: boolean;
  sumOfMonths: number;
}

interface Timeline {
  sumOfMonths: number;
  periods: Period[];
}

@Component({
  selector: 'mcv-timeline-nav',
  standalone: true,
  imports: [CommonModule, NgFor, FormatDatePipe],
  templateUrl: './timeline-nav.component.html',
  styleUrls: ['./timeline-nav.component.scss'],
})
export class TimelineNavComponent implements OnChanges {
  @Input({ required: true })
  public workExperiences: WorkExperience[] = [];

  public timeline: Timeline | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['workExperiences']) {
      this.timeline = this.getTimeline(changes['workExperiences'].currentValue);
    }
  }

  private getTimeline(workExperiences: WorkExperience[]): Timeline | null {
    if (workExperiences.length === 0) {
      return null;
    }
    const periods = workExperiences.map((workExperience) => ({
      title: workExperience.jobTitle,
      active: false,
      start: workExperience.period.start,
      end: workExperience.period.end,
      sumOfMonths: this.getSumOfMonths(workExperience.period),
    }));

    return {
      sumOfMonths: this.getTotalSumOfMonths(periods),
      periods,
    };
  }

  private getSumOfMonths({ start, end }: WorkExperiencePeriod): number {
    return differenceInMonths(
      end ? new Date(end) : new Date(),
      new Date(start)
    );
  }

  private getTotalSumOfMonths(periods: Period[]): number {
    return periods.reduce((acc, period) => acc + period.sumOfMonths, 0);
  }
}
