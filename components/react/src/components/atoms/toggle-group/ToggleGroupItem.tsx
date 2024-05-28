import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useContext,
} from 'react';

import { Item } from '@radix-ui/react-toggle-group';
import { VariantProps } from 'class-variance-authority';

import { ToggleGroupContext } from '@components/atoms/toggle-group/ToggleGroupContext';
import { toggleVariants } from '@components/atoms/toggle/toggleVariants';

import { cn } from '@utils/styles';

export const ToggleGroupItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Item>
  );
});

ToggleGroupItem.displayName = Item.displayName;
