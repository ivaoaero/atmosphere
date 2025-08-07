import { Check } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@components/atoms/icon-button';

const meta = {
  title: 'General/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    children: <Check />,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default = {} satisfies Story;
