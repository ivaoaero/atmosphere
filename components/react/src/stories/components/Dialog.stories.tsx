import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { DialogClose } from '@components/atoms/dialog';
import { Dialog } from '@components/molecules/dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    title: 'Dialog title',
    description: 'Dialog description',
    trigger: 'Open dialog',
    children: 'Dialog content',
    topRightCloseButton: true,
    onOpenChange: action('open change'),
  },
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: 'object',
    },
    open: {
      type: 'boolean',
      description:
        'Whether the dialog is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the dialog initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default = {} satisfies Story;

export const CustomCloseButton = {
  args: {
    topRightCloseButton: false,
    footer: <DialogClose>Custom Close</DialogClose>,
  },
} satisfies Story;
