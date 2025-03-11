import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from 'react';

import { Close, Content, Portal } from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { Button } from '@components/atoms/button';
import { SheetDescription } from '@components/atoms/sheet/SheetDescription';
import { SheetFooter } from '@components/atoms/sheet/SheetFooter';
import { SheetHeader } from '@components/atoms/sheet/SheetHeader';
import { SheetOverlay } from '@components/atoms/sheet/SheetOverlay';
import { SheetTitle } from '@components/atoms/sheet/SheetTitle';
import { sheetVariants } from '@components/atoms/sheet/sheetVariants';

import { cn } from '@utils/styles';

export interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {
  description?: string;
  footerCloseButton?: boolean;
  footer?: ReactNode;
}

export const SheetContent = forwardRef<
  ElementRef<typeof Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      className,
      children,
      title,
      description,
      footer,
      footerCloseButton,
      ...props
    },
    ref,
  ) => (
    <Portal>
      <SheetOverlay />
      <Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <Close className="absolute right-4 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </Close>
        <SheetHeader title={title}>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">{children}</div>
        {footer || footerCloseButton ? (
          <SheetFooter>
            {footer}
            {footerCloseButton ? (
              <Close asChild>
                <Button variant="outline" onClick={() => {}}>
                  Close
                </Button>
              </Close>
            ) : null}
          </SheetFooter>
        ) : (
          <div />
        )}
      </Content>
    </Portal>
  ),
);
SheetContent.displayName = Content.displayName;
