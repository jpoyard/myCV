import { formatDate } from '@angular/common';
import {
  Inject,
  LOCALE_ID,
  Pipe,
  PipeTransform,
  ɵRuntimeError as RuntimeError,
  ɵstringify as stringify,
} from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
  pure: true,
})
export class FormatDatePipe implements PipeTransform {
  public static readonly DATE_FORMAT = 'MMMM y';
  public static readonly INVALID_PIPE_ARGUMENT = 2100;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: Date | string | number | null | undefined): string | null {
    if (value == null) {
      return new Intl.RelativeTimeFormat(this.locale, {
        numeric: 'auto',
      }).format(0, 'day');
    } else if (value === '' || value !== value) {
      return null;
    } else {
      try {
        return formatDate(value, FormatDatePipe.DATE_FORMAT, this.locale);
      } catch (error) {
        throw new RuntimeError(
          FormatDatePipe.INVALID_PIPE_ARGUMENT,
          `InvalidPipeArgument: '${value}' for pipe '${stringify(
            (error as Error).message
          )}'`
        );
      }
    }
  }
}
