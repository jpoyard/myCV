import { CommonModule, NgFor } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { differenceInMonths } from 'date-fns';
import {
  WorkExperience,
  WorkExperiencePeriod,
} from 'src/app/features/viewer/model/work-experience';
import { FormatDatePipe } from '../../pipe/format-date/format-date.pipe';

interface Period extends WorkExperiencePeriod {
  id: number;
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
  public selectedPeriodId = signal<number | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['workExperiences']) {
      this.timeline = this.getTimeline(changes['workExperiences'].currentValue);
    }
  }

  public onMouseEnter(period: Period): void {
    period.active = true;
  }

  public onMouseLeave(period: Period): void {
    period.active = false;
  }

  public onSelect($event: MouseEvent, period: Period): void {
    $event.stopPropagation();
    this.selectedPeriodId.update((selectedPeriodId) =>
      selectedPeriodId === period.id ? null : period.id
    );
  }

  public trackByFn(_index: number, period: Period): number {
    return period.id;
  }

  private getTimeline(workExperiences: WorkExperience[]): Timeline | null {
    if (workExperiences.length === 0) {
      return null;
    }
    const periods = workExperiences.map((workExperience, id) => ({
      id,
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
    const start = Math.min(
      ...periods.map((period) => new Date(period.start).getTime())
    );
    const end = Math.max(
      ...periods.map((period) =>
        period.end ? new Date(period.end).getTime() : new Date().getTime()
      )
    );
    return differenceInMonths(new Date(end), new Date(start));
  }
}
