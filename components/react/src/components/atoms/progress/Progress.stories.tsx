import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '@components/atoms/progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 33,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default = {} satisfies Story;
