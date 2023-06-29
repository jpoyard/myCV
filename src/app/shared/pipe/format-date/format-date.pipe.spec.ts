import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import { ɵregisterLocaleData, ɵunregisterLocaleData } from '@angular/core';
import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;
  const date = new Date(2015, 5, 15, 9, 3, 1, 550);
  const expected = 'June 2015';

  beforeAll(() => ɵregisterLocaleData(localeEn, localeEnExtra));
  afterAll(() => ɵunregisterLocaleData());

  [
    {
      title: 'Date object',
      when: date,
      then: expected,
    },
    {
      title: 'Integer',
      when: date.getTime(),
      then: expected,
    },
    {
      title: 'Numeric strings',
      when: `${date.getTime()}`,
      then: expected,
    },
    {
      title: 'Decimal strings',
      when: `${date.getTime()}.11`,
      then: expected,
    },
    {
      title: 'ISO string',
      when: date.toISOString(),
      then: expected,
    },
    {
      title: 'empty string',
      when: '',
      then: null,
    },
    {
      title: 'NaN',
      when: Number.NaN,
      then: null,
    },
    ...[null, undefined].map((when) => ({
      title: when,
      when,
      then: 'today',
    })),
  ].forEach(({ title, when, then }) => {
    it(`should return '${then}' when ${title}`, () => {
      pipe = new FormatDatePipe('en-US');
      expect(() => pipe.transform(when)).not.toThrow();
      expect(pipe.transform(when)).toBe(then);
    });
  });

  it('should not support other objects', () => {
    expect(() => pipe.transform({} as any)).toThrowError(/InvalidPipeArgument/);
  });
});
