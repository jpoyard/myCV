import { format } from 'date-fns';
import { formatDate } from './date.function';

describe('date.function', () => {
  describe('formatDate', () => {
    const date = new Date('2020-12-31');
    const expected = '2020-12-31';

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
        title: 'ISO string',
        when: date.toISOString(),
        then: expected,
      },
      {
        title: 'empty string',
        when: '',
        then: format(new Date(), 'yyyy-MM-dd'),
      },
      {
        title: 'NaN',
        when: Number.NaN,
        then: format(new Date(), 'yyyy-MM-dd'),
      },
      ...[null, undefined].map((when) => ({
        title: when,
        when,
        then: format(new Date(), 'yyyy-MM-dd'),
      })),
    ].forEach(({ title, when, then }) => {
      it(`should return '${then}' when ${title}`, () => {
        expect(() => formatDate(when)).not.toThrow();
        expect(formatDate(when)).toBe(then);
      });
    });
  });
});
