import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from 'react';

import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from '@components/atoms/tabs';

import { cn } from '@utils/styles';

export interface TabsProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsRoot>, 'children'> {
  tabs: {
    [key: string]: {
      trigger: ReactNode;
      content: ReactNode;
    };
  };
}

export const Tabs = forwardRef<ElementRef<typeof TabsRoot>, TabsProps>(
  ({ className, tabs, ...props }, ref) => (
    <TabsRoot {...props} ref={ref} className={cn('w-[400px]', className)}>
      <TabsList>
        {Object.entries(tabs).map(([key, { trigger }]) => (
          <TabsTrigger key={key} value={key}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(tabs).map(([key, { content }]) => (
        <TabsContent key={key} value={key}>
          {content}
        </TabsContent>
      ))}
    </TabsRoot>
  ),
);
Tabs.displayName = 'Tabs';
