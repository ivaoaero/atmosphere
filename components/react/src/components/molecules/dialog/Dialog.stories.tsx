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
    topRighCloseButton: true,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default = {} satisfies Story;

export const CustomCloseButton = {
  args: {
    topRighCloseButton: false,
    footer: <DialogClose>Custom Close</DialogClose>,
  },
} satisfies Story;
