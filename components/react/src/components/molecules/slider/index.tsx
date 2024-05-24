import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from '@components/atoms/slider';

export const Slider = forwardRef<
  ElementRef<typeof SliderRoot>,
  ComponentPropsWithoutRef<typeof SliderRoot>
>(({ ...props }, ref) => (
  <SliderRoot ref={ref} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
));
Slider.displayName = SliderRoot.displayName;
