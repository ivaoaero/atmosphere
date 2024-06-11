import { createContext } from 'react';

import { VariantProps } from 'class-variance-authority';

import { toggleVariants } from '@components/atoms/toggle/toggleVariants';

export const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});
