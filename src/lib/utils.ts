import _ from 'lodash';
import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

import { MediaProps } from '@vat/types/media.types';
import { RawDashboardHighlightsByDateRangeResponse } from '@vat/types/order.types';

/**
 * Merges class names using the `clsx` and `tailwind-merge` libraries.
 * @param inputs - The class names to merge.
 * @returns A string with the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param string - The input string.
 * @returns The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
 * Returns a base64-encoded string representing the image preview of a given file.
 * @param image - The file to generate the preview from.
 * @returns A Promise that resolves with the base64-encoded string of the image preview.
 */
export async function getImagePreview(image: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(image);
  });
}

/**
 * Formats the given price as a string with a dollar sign and two decimal places.
 *
 * @param price - The price to be formatted.
 * @returns The formatted price string.
 */
export function returnFormattedPrice(price: number) {
  if (price === undefined) {
    console.error('Price is not defined');

    return;
  }

  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(price)
    .replace('$', '$ ');

  return formattedPrice;
}

/**
 * Formats a number with the en-US locale.
 * @param value - The number to be formatted.
 * @returns The formatted number as a string.
 */
export function returnFormattedNumber(value: number) {
  if (value === undefined) {
    console.error('Value is not defined');

    return;
  }

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

/**
 * Calculates the dashboard highlights based on the provided orders data.
 * @param ordersData - The orders data to calculate the highlights from.
 * @returns An object containing the calculated dashboard highlights:
 * - totalOrdersRevenue: The total revenue from all orders.
 * - totalDishesOrdered: The total number of dishes ordered.
 * - totalCustomers: The total number of unique customers.
 */
export function getCalculatedDashboardHighlights(
  ordersData: RawDashboardHighlightsByDateRangeResponse['data']['orders']['data']
) {
  if (ordersData.length === 0) {
    return {
      totalOrdersRevenue: 0,
      totalDishesOrdered: 0,
      totalCustomers: 0,
    };
  }

  const totalOrdersRevenue: number = _.reduce(
    ordersData,
    (sum, order) => {
      return sum + order.attributes.total;
    },
    0
  );

  const totalDishesOrdered: number = _.reduce(
    ordersData,
    (sum, order) => {
      return sum + order.attributes.totalDishes;
    },
    0
  );

  const uniqueOrders = ordersData.filter(
    (entry) => entry.attributes.owner !== 'Anonymous'
  );
  const uniqueCustomers = uniqueOrders.length;

  const anonymousOrders = ordersData.filter(
    (entry) => entry.attributes.owner === 'Anonymous'
  );
  const anonymousCustomers = anonymousOrders.length;

  const totalCustomers = uniqueCustomers + anonymousCustomers;

  return {
    totalOrdersRevenue,
    totalDishesOrdered,
    totalCustomers,
  };
}

/**
 * Calculates the percentage change between two sets of dashboard highlights.
 * @param yesterday - The highlights from yesterday.
 * @param today - The highlights from today.
 * @returns An object containing the percentage change for each highlight.
 * @example { totalOrdersRevenue: '+10.00%', totalDishesOrdered: '-5.00%', totalCustomers: '+2.00%' }
 */
export function calculatePercentageChange(
  yesterday: ReturnType<typeof getCalculatedDashboardHighlights>,
  today: ReturnType<typeof getCalculatedDashboardHighlights>
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in yesterday) {
    if (yesterday.hasOwnProperty(key) && today.hasOwnProperty(key)) {
      let percentageChange: number;
      if (yesterday[key] === 0) {
        percentageChange = 0;
      } else {
        percentageChange =
          ((today[key] - yesterday[key]) / yesterday[key]) * 100;
      }
      const sign = percentageChange >= 0 ? '+' : '-';
      result[key] = `${sign}${Math.abs(percentageChange).toFixed(2)}%`;
    }
  }

  return result;
}
