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
>(({ ...props }, ref) => {
  const value = props.value || props.defaultValue || [0];

  return (
    <SliderRoot ref={ref} {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      {value.map((_, i) => (
        <SliderThumb key={i} />
      ))}
    </SliderRoot>
  );
});
Slider.displayName = SliderRoot.displayName;
