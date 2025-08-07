import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import { Button } from '@components/atoms/button';
import { SheetContent, SheetRoot, SheetTrigger } from '@components/atoms/sheet';
import { SheetContentProps } from '@components/atoms/sheet/SheetContent';

export interface SheetProps extends ComponentPropsWithoutRef<typeof SheetRoot> {
  trigger?: ReactNode;
  title: string;
  description?: string;
  footerCloseButton?: boolean;
  footer?: ReactNode;
  side?: SheetContentProps['side'];
}

export const Sheet: ComponentType<SheetProps> = ({
  title,
  children,
  description,
  trigger,
  footer,
  footerCloseButton = false,
  side,
  ...props
}) => {
  return (
    <SheetRoot {...props}>
      {trigger && (
        <SheetTrigger asChild>
          {typeof trigger === 'string' ? (
            <Button variant="outline">{trigger}</Button>
          ) : (
            trigger
          )}
        </SheetTrigger>
      )}
      <SheetContent
        side={side}
        title={title}
        description={description}
        footer={footer}
        footerCloseButton={footerCloseButton}
      >
        {children}
      </SheetContent>
    </SheetRoot>
  );
};

Sheet.displayName = 'Sheet';
