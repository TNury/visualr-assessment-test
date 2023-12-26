import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

import { MediaProps } from '@vat/types/media.types';

/**
 * Merges class names using the `clsx` and `tailwind-merge` libraries.
 * @param inputs - The class names to merge.
 * @returns A string with the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the media properties with the updated `src` attribute.
 * @param imageProps - The media properties object.
 * @returns The updated media properties object.
 */
export function returnMediaProps(imageProps: MediaProps) {
  return {
    ...imageProps.attributes,
    src: `${process.env.NEXT_PUBLIC_cmsUrl}${imageProps.attributes.url}`,
  };
}

/**
 * Formats the given price as a string with a dollar sign and two decimal places.
 *
 * @param price - The price to be formatted.
 * @returns The formatted price string.
 */
export function returnFormattedPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(price)
    .replace('$', '$ ');
}

export function returnFormattedNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Returns the date at midnight in ISO string format.
 * @returns The formatted date in ISO string format.
 */
export function getDateAtMidnight(daysToAdd: number = 0) {
  const currentDate = new Date();

  // Add the specified number of days to the current date
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + daysToAdd);

  // Set the time to 12:00:00
  targetDate.setHours(0, 0, 0, 0);

  // Format the date in ISO string format
  const formattedDate = targetDate.toISOString();

  return formattedDate;
}

/**
 * Returns the current date formatted as a string.
 * The format is "Weekday Day Month, Year".
 * @returns The formatted date string.
 */
export function getTodayFormatted() {
  const dateNow = new Date();

  const weekday = dateNow.toLocaleDateString('en-US', { weekday: 'long' });
  const day = dateNow.toLocaleDateString('en-US', { day: 'numeric' });
  const month = dateNow.toLocaleDateString('en-US', { month: 'short' });
  const year = dateNow.toLocaleDateString('en-US', { year: 'numeric' });

  const formattedDate = `${weekday} ${day} ${month}, ${year}`;

  return formattedDate;
}
