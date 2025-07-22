import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { TooltipProvider } from '@components/atoms/tooltip';
import { Tooltip } from '@components/molecules/tooltip';

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  decorators: (Story) => (
    <TooltipProvider>
      <Story />
    </TooltipProvider>
  ),
  tags: ['autodocs'],
  args: {
    children: 'Hover me',
    content: 'Tooltip content',
    onOpenChange: action('open change'),
  },
  argTypes: {
    children: {
      description:
        'The object that triggers the tooltip. When a non-string `ReactNode` is passed, the trigger will be that `ReactNode`. Otherwise, it will be used as the content of a button.',
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    content: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    delayDuration: {
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
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
    open: {
      type: 'boolean',
      description:
        'Whether the tooltip is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the tooltip initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
    disableHoverableContent: {
      type: 'boolean',
      description:
        'When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default = {} satisfies Story;

export const CustomComponents = {
  args: {
    children: <Button>Hover me</Button>,
    content: <u>Tooltip content</u>,
  },
} satisfies Story;
