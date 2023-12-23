import { MediaProps } from '@vat/types/media.types';
import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

/**
 * Merges class names using the `clsx` and `tailwind-merge` libraries.
 * @param inputs - The class names to merge.
 * @returns A string with the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function returnMediaProps(imageProps: MediaProps) {
  return {
    ...imageProps.attributes,
    src: `${process.env.cmsUrl}${imageProps.attributes.url}`,
  };
}
