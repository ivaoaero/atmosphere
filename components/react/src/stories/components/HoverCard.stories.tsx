import { action } from '@storybook/addon-actions';

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
    onOpenChange: action('open change'),
  },
  argTypes: {
    open: {
      type: 'boolean',
      description:
        'Whether the card is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description: 'Sets the card initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
    triggerAsChild: {
      description: 'Pass `asChild` prop to the trigger component.',
      type: 'boolean',
    },
    openDelay: {
      description: 'Delay in milliseconds before the card opens.',
      type: 'number',
    },
    closeDelay: {
      description: 'Delay in milliseconds before the card closes.',
      type: 'number',
    },
    side: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: {
          summary: 'Side',
        },
      },
    },
    sideOffset: {
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      table: {
        defaultValue: { summary: 'center' },
        type: {
          summary: 'Align',
        },
      },
    },
    alignOffset: {
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
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
