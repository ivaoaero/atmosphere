import { createContext, useContext } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { CarouselRootProps } from '@components/atoms/carousel/CarouselRoot';

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselRootProps;

export const CarouselContext = createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};
