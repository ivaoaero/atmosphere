import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { HoverCard } from '@components/molecules/hover-card';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  args: {
    trigger: 'Hover to open card',
    children: 'Card content',
  },
  argTypes: {
    open: {
      name: 'Open',
      description: 'Manually control the open state of the card.',
      control: 'boolean',
    },
    defaultOpen: {
      name: 'Default Open',
      description: 'Set the default open state of the card.',
      control: 'boolean',
    },
    triggerAsChild: {
      name: 'Use trigger as child',
      description: 'Pass `asChild` prop to the trigger component.',
      control: 'boolean',
    },
    closeDelay: {
      name: 'Close Delay',
      description: 'Delay in milliseconds before the card closes.',
      control: 'number',
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default = {} satisfies Story;

export const WithButtonTrigger = {
  args: {
    trigger: <Button>Hover here</Button>,
    triggerAsChild: true,
  },
} satisfies Story;

export const ManagedState = {
  args: {
    open: true,
  },
} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultOpen: true,
  },
} satisfies Story;
