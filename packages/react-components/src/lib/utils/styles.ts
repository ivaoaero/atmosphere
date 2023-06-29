import { ClassArray, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function classNames(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}
