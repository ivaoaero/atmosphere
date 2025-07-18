import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import type { StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Popover } from '@components/molecules/popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    trigger: <Button>Click me</Button>,
    children: (
      <>
        <h5>This is the content of a Popover</h5>
        <p>You can do anything in here!</p>
      </>
    ),
    onOpenChange: action('open change'),
  },
  argTypes: {
    trigger: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    children: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
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
        'Whether the popover is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the popover initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default = {} satisfies Story;
