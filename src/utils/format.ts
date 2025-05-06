import dayjs from 'dayjs';

/**
 * Format a date to a standardized string representation
 * @param date The date to format
 * @param format Optional format string (defaults to YYYY-MM-DD)
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | dayjs.Dayjs | string,
  format: string = 'YYYY-MM-DD',
): string => {
  if (!date) return '';

  const d = dayjs(date);
  return d.format(format);
};
