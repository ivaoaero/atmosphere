import { ComponentPropsWithoutRef, ElementRef, forwardRef, Key } from 'react';

import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselRoot,
} from '@components/atoms/carousel';
import { CarouselRootProps } from '@components/atoms/carousel/CarouselRoot';

export interface CarouselProps extends Omit<CarouselRootProps, 'children'> {
  items: (Omit<ComponentPropsWithoutRef<typeof CarouselItem>, 'key'> & {
    key: Key;
  })[];
}

export const Carousel = forwardRef<
  ElementRef<typeof CarouselRoot>,
  CarouselProps
>(({ items, ...props }, ref) => {
  return (
    <CarouselRoot ref={ref} {...props}>
      <CarouselContent>
        {items.map(({ key, ...itemProps }) => (
          <CarouselItem key={key} {...itemProps} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  );
});
Carousel.displayName = 'Carousel';
