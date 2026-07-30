import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-tabs';

import { cn } from '@utils/styles';

export const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = Content.displayName;
