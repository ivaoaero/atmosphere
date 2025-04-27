import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog } from '@components/molecules/alert-dialog';

const meta: Meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  args: {
    title: 'This is a title',
    description: 'This is a description',
    triggerText: 'Open',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    onConfirm: action('confirm'),
    onCancel: action('cancel'),
    onOpenChange: action('open change'),
  },
  argTypes: {
    title: {
      description: 'Title of the alert dialog.',
      type: 'string',
    },
    description: {
      description: 'Description of the alert dialog.',
      type: 'string',
    },
    confirmText: {
      description: 'Text for the confirm button.',
      type: 'string',
    },
    cancelText: {
      description: 'Text for the cancel button.',
      type: 'string',
    },
    open: {
      type: 'boolean',
      description:
        'Whether the alert dialog is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the alert dialog initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
    triggerButtonProps: {
      table: {
        type: {
          summary: 'ButtonProps',
          detail: 'Props that can be applied to the Button component.',
        },
      },
    },
    confirmButtonProps: {
      table: {
        type: {
          summary: 'ButtonProps',
          detail: 'Props that can be applied to the Button component.',
        },
      },
    },
    cancelButtonProps: {
      table: {
        type: {
          summary: 'ButtonProps',
          detail: 'Props that can be applied to the Button component.',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default = {} satisfies Story;
