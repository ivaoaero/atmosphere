import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { AlertDialog } from '@components/molecules/alert-dialog/index';

const meta: Meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  args: {
    title: 'This is a title',
    description: 'This is a description',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    children: <Button>Open</Button>,
  },
  argTypes: {
    title: {
      name: 'Title',
      description: 'Title of the alert dialog.',
      type: 'string',
      control: 'text',
    },
    description: {
      name: 'Description',
      description: 'Description of the alert dialog.',
      type: 'string',
      control: 'text',
    },
    confirmText: {
      name: 'Confirm Text',
      description: 'Text for the confirm button.',
      type: 'string',
      control: 'text',
      defaultValue: 'Confirm',
    },
    cancelText: {
      name: 'Cancel Text',
      description: 'Text for the cancel button.',
      type: 'string',
      control: 'text',
      defaultValue: 'Cancel',
    },
    children: {
      name: 'Children',
      description: 'Trigger for the alert dialog.',
      type: 'function',
    },
  },
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const AlertDialogStory: Story = {
  name: 'AlertDialog',
  args: {},
};
