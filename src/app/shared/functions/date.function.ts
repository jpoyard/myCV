import { format } from 'date-fns';

export function formatDate(
  value: Date | string | number | null | undefined
): string {
  return format(
    value == null || value === '' || value !== value
      ? new Date()
      : new Date(value),
    'yyyy-MM-dd'
  );
}
